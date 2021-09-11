import { useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import { UnsignedByteType, PMREMGenerator, Texture } from 'three';

export default function EnvironmentController({ hdri }) {
  const RGBELoader = require('three/examples/jsm/loaders/RGBELoader').RGBELoader;

  const { gl, scene } = useThree();

  useEffect(() => {
    const pmremGenerator = new PMREMGenerator(gl);

    const loader = new RGBELoader();
    loader.setDataType(UnsignedByteType);
    pmremGenerator.compileEquirectangularShader();

    if (hdri) {
      loader.load(hdri, (texture) => {
        const envMap = pmremGenerator.fromEquirectangular(texture).texture;
        scene.environment = envMap;
        // scene.background = envMap
        texture.dispose();
        pmremGenerator.dispose();
      });
    }
  }, [gl]);

  return null;
}
