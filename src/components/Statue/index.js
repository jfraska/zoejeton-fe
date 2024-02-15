"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useDepthBuffer, SpotLight } from "@react-three/drei";
import { Vector3 } from "three";
import CursorProvider from "@/Providers/CursorProvider";

const Model = (props) => {
  const { nodes, materials } = useGLTF("/three_graces/scene.gltf");
  return (
    <group {...props} dispose={null}>
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

function MovingLight({ vec = new Vector3(), ...props }) {
  const light = useRef();
  const viewport = useThree((state) => state.viewport);
  useFrame((state) => {
    light.current.target.position.lerp(
      vec.set(
        (state.mouse.x * viewport.width) / 2,
        (state.mouse.y * viewport.height) / 2,
        0
      ),
      0.1
    );
    light.current.target.updateMatrixWorld();
  });

  return (
    <directionalLight
      castShadow
      ref={light}
      penumbra={1}
      distance={6}
      angle={0.35}
      attenuation={5}
      anglePower={4}
      intensity={2}
      {...props}
    />
  );
}

function Scene() {
  const depthBuffer = useDepthBuffer({ frames: 1 });
  return (
    <>
      <MovingLight depthBuffer={depthBuffer} color="#fff" />
      <Model
        position={[-17, -52, 16]}
        scale={[0.5, 0.5, 0.5]}
        rotation={[-1.95, 0, -0.05]}
      />
    </>
  );
}

export default function Statue() {
  return (
    <Suspense fallback={null}>
      <CursorProvider>
        <Canvas shadows dpr={[1, 2]}>
          <fog attach="fog" args={["#202020", 5, 20]} />
          <ambientLight intensity={0.015} />
          <Scene />
        </Canvas>
      </CursorProvider>
    </Suspense>
  );
}
