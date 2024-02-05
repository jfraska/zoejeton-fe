"use client";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Preload, useGLTF, Stage, OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";

const Model = (props) => {
  const { nodes, materials } = useGLTF("/three_graces/scene.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
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

useGLTF.preload("/three_graces/scene.gltf");

function MousePointLight() {
  const pointLightRef = useRef();
  let previousTime = 0;

  useFrame(({ mouse, camera, clock }) => {
    const elapsedTime = clock.getElapsedTime();
    const deltaTime = elapsedTime - previousTime;
    previousTime = elapsedTime;

    // const mousePosition = new Vector3(
    //   (mouse.x * 8 - pointLightRef.current.position.x) * 2 * deltaTime,
    //   (mouse.y * 9 + pointLightRef.current.position.y - 2) * deltaTime,
    //   1.8
    // );

    const mousePosition = new Vector3(mouse.x - 5, mouse.y - 5, 1.8);

    // camera.position.z += (mouse.y / 3 + camera.position.z) * 2 * deltaTime;
    // camera.position.x += (mouse.x / 3 - camera.position.x) * 2 * deltaTime;
    pointLightRef.current.position.copy(mousePosition);
  });

  return <directionalLight ref={pointLightRef} color="red" intensity={1} />;
}

export default function Statue() {
  return (
    <Canvas>
      <ambientLight intensity={0.6} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>
        <Model position={[-15, -60, 0]} scale={[0.5, 0.5, 0.6]} />
      </Suspense>
    </Canvas>
  );
}
