import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  // const computer = useGLTF('./car/Car_cartoon.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="black" />
      <pointLight intensity={5} />
      <primitive 
        object={computer.scene}
        scale={0.75}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.01]} 
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  return(
    <Canvas
      frameloop='demand'
      shadows
      camera={{position: [20, 3, 5], fov:30}}
      gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
        enableZoom={false} 
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        />
        <Computers/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas