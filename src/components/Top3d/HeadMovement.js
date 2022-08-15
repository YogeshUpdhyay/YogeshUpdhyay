import { Vector2 } from 'three';
import { useFrame } from '@react-three/fiber';


export default function useHeadMovement(
  nodes,
  isFullbody,
  activeDistance = 2,
  activeRotation = 0.2,
  rotationMargin = new Vector2(5, 10)
) {
  const rad = Math.PI / 180;
  const currentPos = new Vector2(0, 0);
  const targetPos = new Vector2(0, 0);

  activeDistance -= isFullbody ? 0 : 1;
  const eyeRotationOffsetX = isFullbody ? 0 : 90 * rad;
  const neckBoneRotationOffsetX = (isFullbody ? 10 : -5) * rad;

  useFrame((state) => {
    const cameraToHeadDistance = state.camera.position.distanceTo(nodes.Head.position);
    const cameraRotation = Math.abs(state.camera.rotation.z);

    if (cameraToHeadDistance < activeDistance && cameraRotation < activeRotation) {
      targetPos.x = mapRange(state.mouse.y, -0.5, 1, rotationMargin.x * rad, -rotationMargin.x * rad);
      targetPos.y = mapRange(state.mouse.x, -0.5, 0.5, -rotationMargin.y * rad, rotationMargin.y * rad);
    } else {
      targetPos.set(0, 0);
    }

    currentPos.x = lerp(currentPos.x, targetPos.x);
    currentPos.y = lerp(currentPos.y, targetPos.y);

    nodes.Neck.rotation.x = currentPos.x + neckBoneRotationOffsetX;
    nodes.Neck.rotation.y = currentPos.y;

    nodes.Head.rotation.x = currentPos.x;
    nodes.Head.rotation.y = currentPos.y;

    nodes.RightEye.rotation.x = currentPos.x - eyeRotationOffsetX;
    nodes.LeftEye.rotation.x = currentPos.x - eyeRotationOffsetX;

    if (isFullbody) {
      nodes.RightEye.rotation.y = currentPos.y * 2;
      nodes.LeftEye.rotation.y = currentPos.y * 2;
    } else {
      nodes.RightEye.rotation.z = currentPos.y * 2 + Math.PI;
      nodes.LeftEye.rotation.z = currentPos.y * 2 + Math.PI;
    }
  });

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  const lerp = (start, end, time = 0.05) => start * (1 - time) + end * time;

  const mapRange = (value, inMin, inMax, outMin, outMax) => {
    value = clamp(value, inMin, inMax);
    return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  };
}
