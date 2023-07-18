import { useRef } from 'react'
import { Canvas, Euler, useFrame } from '@react-three/fiber'
import { Edges, MeshPortalMaterial, OrbitControls, Environment, useGLTF } from '@react-three/drei'
import { Mesh} from 'three'
import getRandomPastelColor from '../utils/randColor'




export const ThreeCube = () => {
 
  return (
    <Canvas shadows camera={{ position: [3, 0, 3] }}>
      <Portal />
      <OrbitControls enableZoom={false} autoRotate enablePan={false}/>
    </Canvas>
  )
}

function Side({ rotation = [0, 0, 0] as Euler | undefined, bg = '#f0f0f0', children, index }: any) {
  const mesh = useRef<any>()

  const { nodes }: any = useGLTF('/aobox-transformed.glb')

  useFrame((_state, delta) => {

    mesh.current.rotation.x = mesh.current.rotation.y += delta

  })
  return (
    <MeshPortalMaterial attach={`material-${index}`}>
      {/** Everything in here is inside the portal and isolated from the canvas */}
      <ambientLight intensity={0.4} />
      <Environment preset="city" />
      {/** A box with baked AO */}
      <mesh castShadow receiveShadow rotation={rotation} geometry={nodes.Cube.geometry}>
        <meshStandardMaterial aoMapIntensity={1} aoMap={nodes.Cube.material.aoMap} color={bg} />
        <spotLight castShadow color={bg} intensity={2} position={[10, 10, 10]} angle={0.15} penumbra={1} shadow-normalBias={0.05} shadow-bias={0.0001} />
      </mesh>
      {/** The shape */}
      <mesh castShadow receiveShadow ref={mesh}>
        {children}
        <meshLambertMaterial color={bg} />
      </mesh>
    </MeshPortalMaterial>
  )
}
function Portal() {
  const portal = useRef<Mesh>(null!)
   useFrame((_state, delta) => {
    portal.current.rotation.x += delta/2
    portal.current.rotation.y += delta/3
    
   })
  return (

    <mesh ref={portal} rotation={[0, -Math.PI / 4, 0]} castShadow receiveShadow>
      <boxGeometry args={[2, 2, 2]} />
      <Edges />
      <Side rotation={[0, 0, 0]} bg={getRandomPastelColor()} index={0}>
        <torusGeometry args={[0.65, 0.3, 64]} />
      </Side>
      <Side rotation={[0, Math.PI, 0]} bg={getRandomPastelColor()} index={1}>
        <torusKnotGeometry args={[0.55, 0.2, 128, 32]} />
      </Side>
      <Side rotation={[0, Math.PI / 2, Math.PI / 2]} bg={getRandomPastelColor()} index={2}>
        <boxGeometry args={[1.15, 1.15, 1.15]} />
      </Side>
      <Side rotation={[0, Math.PI / 2, -Math.PI / 2]} bg={getRandomPastelColor()} index={3}>
        <octahedronGeometry />
      </Side>
      <Side rotation={[0, -Math.PI / 2, 0]} bg={getRandomPastelColor()} index={4}>
        <icosahedronGeometry />
      </Side>
      <Side rotation={[0, Math.PI / 2, 0]} bg={getRandomPastelColor()} index={5}>
        <dodecahedronGeometry />
      </Side>
    </mesh>
  )
}