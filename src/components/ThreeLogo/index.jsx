import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";
import "../../assets/styles/rondoudou.scss"

function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('rondoudou/scene.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Cube093_MAT_Puff_0.geometry} material={materials.MAT_Puff} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh geometry={nodes.Circle_MAT_Floor_0.geometry} material={materials.MAT_Floor} />
          </group>
        </group>
      </group>
    </group>
  )
}

const ThreeLogo = () => {
    const ref = useRef()
    return (
        <>
            <Canvas className="canvas">
                <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight intensity={1} angle={0.1} penumbra={1} />
                    <Model />
                    <OrbitControls enlablePan={true} enlableZoom={true} enableRotate={true}/>
                </Suspense>
            </Canvas>
        </>
    )
}

export default ThreeLogo