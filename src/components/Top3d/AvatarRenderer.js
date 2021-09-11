import { useGLTF } from '@react-three/drei';
import { GLTFLoader, GLTF } from 'three-stdlib';
import React, { useEffect, useMemo, useRef } from 'react';
import { dispose, useFrame, useGraph, useLoader } from '@react-three/fiber';
import { AnimationMixer, LinearFilter, Material, MeshStandardMaterial, Object3D } from 'three';
import useHeadMovement from './HeadMovement';



const initialRotation = 20 * (Math.PI / 180);
let currentRotation = 0;

const setDepthWrite = (materials) => {
  materials.forEach((material) => {
    if (material) material.depthWrite = true;
  });
};

export default function HubAvatar(props) {
  if (!props.url) {
    props.onLoaded();
    return <></>;
  }

  const modelUrl = props.url.replace('.fbx', '.glb');
  const { scene } = useGLTF(modelUrl);
  const clone = useMemo(() => require('three/examples/jsm/utils/SkeletonUtils').SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const meshRef = useRef();

  let mixer = null;

  if (nodes.Armature && props.fullbody) {
    const idleAnimUrl =
      props.gender === 'male'
        ? `${window.location.origin}/assets/MaleIdle.glb`
        : `${window.location.origin}/assets/FemaleIdle.glb`;

    const idleSource = useGLTF(idleAnimUrl);

    mixer = new AnimationMixer(nodes.Armature);
    mixer.clipAction(idleSource.animations[0]).play();
    mixer.update(0);
  } else {
    // multi-mesh halfbody avatar
    if (nodes.Wolf3D_Hands) {
      nodes.Wolf3D_Hands.visible = false;
    }
    // single-mesh halfbody avatar
    if (nodes.RightHand && nodes.LeftHand) {
      nodes.RightHand.position.set(0, -2, 0);
      nodes.LeftHand.position.set(0, -2, 0);
    }
  }

  setDepthWrite([materials.Wolf3D_Headwear, materials.Wolf3D_Glasses, materials.Wolf3D_Shirt]);

  // applying LinearFilter to texture to avoid  pixellization
  Object.values(materials).forEach((material) => {
    const mat = material;
    if (mat.map) {
      mat.map.minFilter = LinearFilter;
    }
  });

  useEffect(() => {
    currentRotation = 0;
    props.onLoaded();

    return () => {
      useLoader.clear(GLTFLoader, modelUrl);
      Object.values(materials).forEach(dispose);
    };
  }, [scene]);

  useFrame((state, delta) => {
    mixer?.update(delta);

    const ref = meshRef.current;

    currentRotation += delta * 0.2;
    ref.rotation.y = initialRotation + Math.sin(currentRotation) / 3;
  });

  useHeadMovement(nodes, props.fullbody);

  return (
    <group ref={meshRef} rotation={[0, 0, 0]}>
      <primitive key="armature" object={nodes.Armature || nodes.Hips} />
      {Object.keys(nodes).map((key) => {
        const node = nodes[key];

        if (node.type === 'SkinnedMesh') {
          return <primitive key={node.name} object={node} receiveShadow castShadow />;
        }

        return null;
      })}
      {props.fullbody && (
        <mesh key="shadow-catcher" receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
          <planeBufferGeometry attach="geometry" args={[5, 5]} />
          <shadowMaterial attach="material" transparent opacity={0.5} />
        </mesh>
      )}
    </group>
  );
}
