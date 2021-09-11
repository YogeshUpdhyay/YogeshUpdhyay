import { useGLTF } from '@react-three/drei';
import { GLTFLoader } from 'three-stdlib';
import React, { useEffect, useMemo, useRef } from 'react';
import { dispose, useFrame, useGraph, useLoader } from '@react-three/fiber';
import { AnimationMixer, LinearFilter } from 'three';
import useHeadMovement from './HeadMovement';
const SkeletonUtils = require('three/examples/jsm/utils/SkeletonUtils');

const initialRotation = 20 * (Math.PI / 180);
let currentRotation = 0;

const setDepthWrite = (materials) => {
  materials.forEach((material) => {
	if (material) material.depthWrite = true;
  });
};

export default function HubAvatar(props) {

    const { scene } = useGLTF("../../assets/avatarModel.glb");
    const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
    console.log(clone)
    const { nodes, materials } = useGraph(clone);

    const meshRef = useRef();

    let mixer = null;

    const idleSource = useGLTF("../../assets/MaleIdle.glb");

    mixer = new AnimationMixer(nodes.Armature);
    mixer.clipAction(idleSource.animations[0]).play();
    mixer.update(0);

    setDepthWrite([materials.Wolf3D_Headwear, materials.Wolf3D_Glasses, materials.Wolf3D_Shirt]);

    // applying LinearFilter to texture to avoid  pixellization
    Object.values(materials).forEach((material) => {
        const mat = material;
        if (mat.map) {
            mat.map.minFilter = LinearFilter;
        }
    });

    useFrame((state, delta) => {
        mixer?.update(delta);

        const ref = meshRef.current;

        currentRotation += delta * 0.2;
        ref.rotation.y = initialRotation + Math.sin(currentRotation) / 3;
    });

    useHeadMovement(nodes, true);

    return (
		<group ref={meshRef} rotation={[0, 0, 0]}>
			<primitive key="armature" object={nodes.Armature || nodes.Hips} />
			{Object.keys(nodes).map((key) => {
				const node = nodes[key];

				if (node.type === 'SkinnedMesh') {
				    return <primitive key={node.name} object={node} receiveShadow castShadow />;
				} else {
                    return null;
                }

			})}
            <mesh key="shadow-catcher" receiveShadow position={[0, 0, 0]} rotation-x={-Math.PI / 2}>
                <planeBufferGeometry attach="geometry" args={[5, 5]} />
                <shadowMaterial attach="material" transparent opacity={0.5} />
            </mesh>
		</group>
    );
}
