import React, { Suspense, useRef, useState, useEffect } from "react";
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

    const [posX, setPosX] = useState(0)

    const moveModel = (x, y) => {
      setPosX(x / 10000)
    }

    useEffect(() => {
      window.addEventListener("mousemove", function(event){
        moveModel(event.clientX, event.clientY)
      })
  });

    return (
        <>
            <Canvas className="canvas" camera={{position: [-0.2,0.5,-0.2]}}>
                <Suspense fallback={null}>
                    <ambientLight />
                    <spotLight intensity={1} angle={0.1} penumbra={1} />
                    <Model position={[0,0,0]} rotation={[0.5, 0.1 + posX, -0.3]}/>
                    <OrbitControls enlablePan={true} enableRotate={true} enlableZoom={false}/>
                </Suspense>
            </Canvas>
        </>
    )
}

export default ThreeLogo