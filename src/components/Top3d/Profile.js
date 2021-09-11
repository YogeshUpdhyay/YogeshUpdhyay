import { useSelector } from 'react-redux';
import React, { Suspense, useState, useEffect } from 'react';
import { Vector3 } from 'three';
import { PulseLoader } from 'react-spinners';
import { useRouter } from 'next/router';
import { Canvas } from '@react-three/fiber';
import HubAvatar from './hub-avatar';
import EnvironmentController from './EnvironmentController';
import PersonalCard from './personal-card';
import { Button } from '../../../../ui-kit/button/Button';
import Emitter from '../../../../../utils/emitter';
import CameraController from './CameraController';
import { useMinQuery, Screen } from '../../../../ui-kit/screen/screen';
import { generateRandomString } from '../../../../../utils/utilities';
import DownloadAvatar from './download-avatar';
import { RootState } from '../../../../../store/reducers';

// interface ProfileProps {
//   user?: any;
//   viewOnly?: boolean;
// }

export default function Profile({ user: providedUser, viewOnly }) {
  const storeUser = useSelector((state) => state.user);
  const user = providedUser || storeUser;

  const [loadingAvatar, setLoadingAvatar] = useState(true);
  const [urlTail] = useState(`?${generateRandomString(8)}`);
  const [avatarData, setAvatarData] = useState({ gender: 'male', isFullbody: true });
  const isDesktop = useMinQuery(Screen.LG);

  const router = useRouter();

  const handleOnAvatarLoaded = () => {
    setLoadingAvatar(false);
  };

  const customizeHandler = () => {
    if (!user.loggedIn) {
      return Emitter.emit('SIGNIN_CONFIRM');
    }
    Emitter.emit('FULLSCREEN_LOADING', true);
    router.push(`/avatar?id=${user.avatar._id}`, '/avatar');
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

  function handleCount(num: number): string {
    return num ? (num < 10 ? `0${num}` : String(num)) : '-';
  }

  return (
    <>
      <div className="rounded-xl card-bg not-hoverable home-card--mobile lg:home-card--desktop 2xl:home-card--desktop-large lg:overflow-hidden relative pt-4 md:pt-0 z-0">
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
            className="main-avatar-preview cursor-grab active:cursor-grabbing"
          >
            <CameraController
              fullbody={avatarData.isFullbody}
              gender={avatarData.gender}
              camTarget={{ halfbody: 0.55, fullbody: 1.55 }}
              initialCamDistance={{ halfbody: 0.5, fullbody: 0.4 }}
            />
            <EnvironmentController hdri="/assets/envmaps/interior.hdr" />
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
        <div className="transform profile-personal-card scale-x-105 sm:scale-100 md:translate-y-[24px] lg:translate-y-0 lg:scale-[0.90] xl:scale-[0.70] 3xl:scale-100 flex justify-center lg:absolute lg:right-[16px] lg:top-[5%] xl:top-[0%] xl:right-[-56px] 2xl:right-[-64px] 2xl:top-[3%] 3xl:right-[72px] 3xl:top-[10%]">
          <PersonalCard user={user} viewOnly={viewOnly} />
        </div>
        <div className="bottom-section lg:absolute lg:bottom-0 lg:left-0 w-full flex flex-col md:flex-row md:justify-between gap-2 sm:gap-6 md:gap-8 p-4 md:p-12 z-0 pt-0 md:pt-0">
          <div className="stat flex justify-between lg:justify-start flex-row flex-grow-0 gap-8 md:gap-12 2xl:gap-20 z-0">
            <div
              onClick={() => router.push('/hub/avatars', undefined, { shallow: true })}
              className="item cursor-pointer"
            >
              <div className="label pb-1 md:pb-2 text-[#C4C5CC] text-[10px] md:text-sm item cursor-pointer">
                Avatars created
              </div>
              <div className="value text-gray-50 font-mono text-base sm:text-md md:text-lg lg:text-5xl font-bold item">
                {handleCount(user.stat?.avatars)}
              </div>
            </div>
            <div
              onClick={() => router.push('/hub/avatars', undefined, { shallow: true })}
              className="item cursor-pointer"
            >
              <div className="label pb-1 md:pb-2 text-[#C4C5CC] text-[10px] md:text-sm">Apps connected</div>
              <div className="value text-gray-50 font-mono text-base sm:text-md md:text-lg lg:text-5xl font-bold">
                {handleCount(user.stat?.apps - 1)}
              </div>
            </div>
          </div>
          {!viewOnly && (
            <div className="text-right flex items-center gap-8">
              <DownloadAvatar user={user} renderId={user.avatar.url} />
              <Button onClick={customizeHandler} block={!isDesktop} type="default">
                {user.loggedIn ? 'Customize look' : 'Claim Your Avatar'}
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
