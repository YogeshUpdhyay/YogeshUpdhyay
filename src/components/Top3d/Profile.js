import React, { Suspense, useState, useEffect } from 'react';
import { Vector3 } from 'three';
import { PulseLoader } from 'react-spinners';
import { Canvas } from '@react-three/fiber';
import HubAvatar from './HubAvatar';
import EnvironmentController from './EnvironmentController';
import CameraController from './CameraController';


export default function Profile({ user: providedUser }) {
  const storeUser = useSelector((state) => state.user);
  const user = providedUser || storeUser;

  const [loadingAvatar, setLoadingAvatar] = useState(true);
  const [urlTail] = useState(`?${generateRandomString(8)}`);
  const [avatarData, setAvatarData] = useState({ gender: 'male', isFullbody: true });

  const handleOnAvatarLoaded = () => {
    setLoadingAvatar(false);
  };

  useEffect(() => {
    const avatarUrl = user.avatar.url || '';
    const metaDataUrl = avatarUrl.replace('.glb', '.json');
    fetch(metaDataUrl)
      .then((data) => data.json())
      .then((json) => {
        setAvatarData({
          isFullbody: json?.bodyType === 'fullbody',
          gender: json?.outfitGender === 'masculine' ? 'male' : 'female'
        });
      })
      .catch((reason) => {
        console.log(reason);
      });

    return () => {
      setLoadingAvatar(true);
    };
  }, [user.avatar.url]);


  return (
    <>
        {loadingAvatar && (
            <div className="absolute top-0 left-0 bottom-0 w-[50%] flex">
            <div className="m-auto">
                <PulseLoader size={8} />
            </div>
            </div>
        )}
        <div className="lg:absolute w-full h-full">
            <Canvas
            shadows
            camera={{ fov: 50, position: new Vector3(0, 0, 3) }}
            style={{ height: '100%', width: '150%', left: '-50%' }}
            >
            <CameraController
                fullbody={avatarData.isFullbody}
                gender={avatarData.gender}
                camTarget={{ halfbody: 0.55, fullbody: 1.55 }}
                initialCamDistance={{ halfbody: 0.5, fullbody: 0.4 }}
            />
            {/* <EnvironmentController hdri="/assets/envmaps/interior.hdr" /> */}
            <Suspense fallback={null}>
                <HubAvatar
                    url={user.avatar.url + urlTail}
                    onLoaded={handleOnAvatarLoaded}
                    gender={avatarData.gender}
                    fullbody={avatarData.isFullbody}
                />
            </Suspense>
            </Canvas>
        </div>
    </>
  );
}
