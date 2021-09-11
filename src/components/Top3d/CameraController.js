import { useEffect } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Camera, Color, DirectionalLight, Vector3 } from 'three';


const fullbodyMinDist = 0.5;
const fullbodyMaxDist = 2.5;

const halfbodyMinDist = 0.5;
const halfbodyMaxDist = 1.4;

let controls;
let progress = Number.POSITIVE_INFINITY;
let focusOnFace = true;

const faceZoomFullbody = new Vector3(-0.15, 0, 0.55);
const faceZoomHalfbody = new Vector3(-0.11, 0, 0.48);
const bodyZoomFullbody = new Vector3(-0.51, 0, 2.41);

const updateCameraFocus = (camera, delta, fullbody) => {
  const target = fullbody ? (focusOnFace ? faceZoomHalfbody : bodyZoomFullbody) : faceZoomFullbody;

  if (progress <= 1) {
    camera.position.setX(Lerp(camera.position.x, target.x, progress));
    camera.position.setZ(Lerp(camera.position.z, target.z, progress));
    progress += delta;
  }
};

const updateCameraTarget = (camera, target, fullbody) => {
  if (controls && fullbody) {
    let distance = controls.target.distanceTo(camera.position);
    distance = Clamp(distance, fullbodyMaxDist, fullbodyMinDist);
    const pivot = (distance - fullbodyMinDist) / (fullbodyMaxDist - fullbodyMinDist);

    controls.target.set(0, target - 0.6 * pivot, 0);
  }
};

export default function CameraController({ fullbody: fullBody, gender, camTarget, initialCamDistance }) {
  const { camera, gl, scene } = useThree();

  const camTargetValue = camTarget?.fullbody || 1.575;
  const fullbodyCamTarget = gender === 'male' ? camTargetValue + 0.075 : camTargetValue;
  const halfbodyCamTarget = camTarget?.halfbody || 0.1;

  useEffect(() => {
    const OrbitControls = require('three/examples/jsm/controls/OrbitControls').OrbitControls;
    controls = new OrbitControls(camera, gl.domElement);
    controls.enablePan = false;

    controls.minDistance = fullBody ? fullbodyMinDist : halfbodyMinDist;
    controls.maxDistance = fullBody ? fullbodyMaxDist : halfbodyMaxDist;

    controls.minPolarAngle = 1.4;
    controls.maxPolarAngle = 1.4;

    let dirLight = scene.getObjectByName('DirectionalLight');
    if (!dirLight) {
      dirLight = new DirectionalLight();
      dirLight.name = dirLight.type;
      dirLight.intensity = 0;
      dirLight.color = new Color(0xffffff);
      dirLight.shadow.bias = -0.0001;
      dirLight.shadow.mapSize.height = 1024;
      dirLight.shadow.mapSize.width = 1024;
      dirLight.castShadow = true;
      dirLight.position.set(fullBody ? 3 : 2, fullBody ? 5 : 2, fullBody ? 0 : -2);
      camera.add(dirLight);
      scene.add(camera);
    }

    controls.target.set(0, fullBody ? fullbodyCamTarget : halfbodyCamTarget, 0);
    controls.update();

    if (initialCamDistance) {
      camera.position.z = fullBody ? initialCamDistance.fullbody : initialCamDistance.halfbody;
      controls.update();
    }

    const updateCameraMovementProgress = (event) => {
      const distance = controls.target.distanceTo(camera.position);

      if (event.detail) {
        focusOnFace = !fullBody || event.detail.category !== Categories.Shirt;

        const toFace = focusOnFace && distance > (fullBody ? 1.2 : 0.7);
        const toBody = !focusOnFace && distance < 1.7;

        if (toFace || toBody) {
          progress = 0;
        }
      }
    };

    CustomizationCategoryChangeEventHandler.subscribe(updateCameraMovementProgress);

    return () => {
      controls.dispose();
      CustomizationCategoryChangeEventHandler.unsubscribe(updateCameraMovementProgress);
    };
  }, [fullBody, gender]);

  useFrame((_, delta) => {
    updateCameraTarget(camera, fullbodyCamTarget, fullBody);
    updateCameraFocus(camera, delta, fullBody);

    controls.update();
  });

  return null;
}
