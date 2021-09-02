import React, { useRef, useState, Suspense } from 'react'
import * as THREE from 'three/src/Three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {useGLTF, useAnimations} from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

import logo from '../../assets/hero.png'


function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    // Return view, these are regular three.js elements expressed in JSX
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
}

// const Avatar = (props) => {
//     const group = useRef()
//     const { nodes, materials, animations } = useGLTF('../../assets/newAvatar.glb')
//     const { actions } = useAnimations(animations, group)

//     return (
//         <group ref={group} {...props} dispose={null}>
//             <primitive object={nodes.Hips} />
//             <skinnedMesh
//                 geometry={nodes.EyeLeft.geometry}
//                 material={nodes.EyeLeft.material}
//                 skeleton={nodes.EyeLeft.skeleton}
//             />
//             <skinnedMesh
//                 geometry={nodes.EyeRight.geometry}
//                 material={nodes.EyeRight.material}
//                 skeleton={nodes.EyeRight.skeleton}
//             />
//             <skinnedMesh
//                 geometry={nodes.Wolf3D_Glasses.geometry}
//                 material={materials.Wolf3D_Glasses}
//                 skeleton={nodes.Wolf3D_Glasses.skeleton}
//             />
//             <skinnedMesh
//                 geometry={nodes.Wolf3D_Hair.geometry}
//                 material={materials.Wolf3D_Hair}
//                 skeleton={nodes.Wolf3D_Hair.skeleton}
//             />
//             <skinnedMesh
//                 geometry={nodes.Wolf3D_Hands.geometry}
//                 material={nodes.Wolf3D_Hands.material}
//                 skeleton={nodes.Wolf3D_Hands.skeleton}
//             />
//             <skinnedMesh
//                 geometry={nodes.Wolf3D_Shirt.geometry}
//                 material={materials.Wolf3D_Shirt}
//                 skeleton={nodes.Wolf3D_Shirt.skeleton}
//             />
//             <skinnedMesh
//                 name="Wolf3D_Head"
//                 geometry={nodes.Wolf3D_Head.geometry}
//                 material={nodes.Wolf3D_Head.material}
//                 skeleton={nodes.Wolf3D_Head.skeleton}
//                 morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
//                 morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
//             />
//             <skinnedMesh
//                 name="Wolf3D_Teeth"
//                 geometry={nodes.Wolf3D_Teeth.geometry}
//                 material={materials.Wolf3D_Teeth}
//                 skeleton={nodes.Wolf3D_Teeth.skeleton}
//                 morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
//                 morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
//             />
//         </group>
//     );
// }

// useGLTF.preload('../../assets/newAvatar.glb')

// const AvatarModel = (props) => {
//     const group = useRef()
//     const { nodes, materials } = useGLTF('../../assets/avatarModel.glb')
//     return (
//         <group ref={group} {...props} dispose={null}>
//             <primitive object={nodes.Hips} />
//             <skinnedMesh
//                 geometry={nodes.EyeLeft.geometry}
//                 material={nodes.EyeLeft.material}
//                 skeleton={nodes.EyeLeft.skeleton}
//             />
//             <skinnedMesh
//                 geometry={nodes.EyeRight.geometry}
//                 material={nodes.EyeRight.material}
//                 skeleton={nodes.EyeRight.skeleton}
//             />
//             <skinnedMesh
//                 geometry={nodes.Wolf3D_Body.geometry}
//                 material={materials.Wolf3D_Body}
//                 skeleton={nodes.Wolf3D_Body.skeleton}
//             />
//             <skinnedMesh
//                 geometry={nodes.Wolf3D_Glasses.geometry}
//                 material={materials.Wolf3D_Glasses}
//                 skeleton={nodes.Wolf3D_Glasses.skeleton}
//             />
//             <skinnedMesh
//                 geometry={nodes.Wolf3D_Hair.geometry}
//                 material={materials.Wolf3D_Hair}
//                 skeleton={nodes.Wolf3D_Hair.skeleton}
//             />
//             <skinnedMesh
//                 geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
//                 material={materials.Wolf3D_Outfit_Bottom}
//                 skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
//             />
//             <skinnedMesh
//                 geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
//                 material={materials.Wolf3D_Outfit_Footwear}
//                 skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
//             />
//             <skinnedMesh
//                 geometry={nodes.Wolf3D_Outfit_Top.geometry}
//                 material={materials.Wolf3D_Outfit_Top}
//                 skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
//             />
//             <skinnedMesh
//                 name="Wolf3D_Head"
//                 geometry={nodes.Wolf3D_Head.geometry}
//                 material={materials.Wolf3D_Skin}
//                 skeleton={nodes.Wolf3D_Head.skeleton}
//                 morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
//                 morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
//             />
//             <skinnedMesh
//                 name="Wolf3D_Teeth"
//                 geometry={nodes.Wolf3D_Teeth.geometry}
//                 material={materials.Wolf3D_Teeth}
//                 skeleton={nodes.Wolf3D_Teeth.skeleton}
//                 morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
//                 morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
//             />
//         </group>
//     )
// }

// useGLTF.preload('../../assets/avatarModel.glb')


const Top3d = () => {

    return (
        <div className="container p-0">
            {/* <Canvas
                camera={{
                    fov: 50,
                    position: [0,0,5]
                }}
                style={{
                    width: "100%",
                    height: "80vh"
                }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <AvatarModel />
            </Canvas> */}
            <div className="row mx-auto p-0">
                <img src={logo} alt="Hero Avatar" />
            </div>
        </div>
    )
}

export default Top3d
