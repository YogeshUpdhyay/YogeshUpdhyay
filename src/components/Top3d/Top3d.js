import React, { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import HubAvatar from './HubAvatar'
import CameraController from './CameraController'
import EnvironmentController from './EnvironmentController'
import { Vector3 } from 'three'

import './Top3d.css';

const Top3d = () => {

    return (
        <div className="container p-0 mt-md-4">
            <Canvas
                shadows
                camera={{ fov: 50, position: new Vector3(0, 0, 3) }}
                style={{ height: '60vh', width: '150%', left: '-25%'}}
            >
                <CameraController
                    fullbody={true}
                    gender="male"
                    camTarget={{ halfbody: 0.55, fullbody: 1.55 }}
                    initialCamDistance={{ halfbody: 0.5, fullbody: 0.4 }}
                />
                <EnvironmentController hdri="../../assets/interior.hdr" />
                <Suspense fallback={null}>
                    <HubAvatar />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Top3d
