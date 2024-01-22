import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ mobile }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={5} groundColor="black" />
      <pointLight intensity={5} />
      <primitive 
        object={computer.scene}
        scale={mobile ? 0.5 : 0.75}
        position={mobile ? [0, -3.75, -0.75] : [0, -4, -1.5]}
        rotation={[-0.01, -0.6, -0.02]} 
      />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [mobile, setMobil] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)')
    setMobil(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setMobil(event.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    
    return() => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

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
        <Computers mobile={mobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas