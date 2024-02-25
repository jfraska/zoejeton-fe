"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  useDepthBuffer,
  useHelper,
  OrbitControls,
} from "@react-three/drei";
import { PointLight, PointLightHelper, Vector3 } from "three";
import Loader from "../Loader";

const mesh = {
  position: null,
};

const Model = (props) => {
  const model = useRef();
  mesh.position = model;
  const { nodes, materials } = useGLTF(
    "/assets/models/three_graces/scene.gltf"
  );
  return (
    <group {...props} dispose={null} ref={model}>
      <group>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_9.geometry}
          material={materials["Scene_-_Root"]}
        />
        <mesh
          geometry={nodes.Object_10.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
    </group>
  );
};

const Camera = () => {
  const camera = useRef();

  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    const parallaxX = (state.mouse.x * viewport.width) / 128;
    const parallaxY = (state.mouse.y * viewport.height) / 128;

    if (camera.current) {
      camera.current.position.x += parallaxX - camera.current.position.x;
      camera.current.position.z -= parallaxY + camera.current.position.z;
    }
  });
  return (
    <perspectiveCamera
      ref={camera}
      fov={75}
      aspect={viewport.width / viewport.height}
      near={0.1}
      far={100}
    >
      <Model
        position={[-3.5, -11, 0]}
        scale={[0.1, 0.1, 0.1]}
        rotation={[-1.6, 0, 0]}
      />
    </perspectiveCamera>
  );
};

function MovingLight({ vec = new Vector3(), ...props }) {
  const light = useRef();
  // useHelper(light, PointLightHelper, 1);
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.updateMatrixWorld();
  });

  return <pointLight castShadow ref={light} {...props} />;
}

function Scene() {
  const depthBuffer = useDepthBuffer({ frames: 1 });
  return (
    <>
      <MovingLight
        depthBuffer={depthBuffer}
        args={[`white`, 4, 100]}
        position={[-4, 5, 5]}
      />
      <Camera />
    </>
  );
}

export default function Statue({ props }) {
  return (
    <Suspense {...props} fallback={<Loader />}>
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 30, position: [0, 0, 7] }}>
        {/* <color attach="background" args={["#000"]} /> */}
        <fog attach="fog" args={["#202020", 5, 20]} />
        <ambientLight intensity={0.015} />
        <Scene />
        {/* <OrbitControls />
        <gridHelper /> */}
      </Canvas>
    </Suspense>
  );
}
