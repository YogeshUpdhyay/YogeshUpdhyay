/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Willy Decarpentrie (https://sketchfab.com/skudgee)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/mech-drone-8d06874aac5246c59edb4adbe3606e0e
title: Mech Drone
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/newScene.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            geometry={nodes.droid_Robot_0.geometry}
            material={materials.Robot}
            skeleton={nodes.droid_Robot_0.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/newScene.glb')