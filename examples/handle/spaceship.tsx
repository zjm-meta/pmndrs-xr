/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 public/spaceship.glb -t 
Author: Comrade1280 (https://sketchfab.com/comrade1280)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/spacefighter-cockpit-wasp-interdictor-db4aa67fe1164ec088083d7dac2d273f
Title: Spacefighter Cockpit (Wasp Interdictor)
*/

import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Handle } from '@react-three/handle'

type GLTFResult = GLTF & {
  nodes: {
    cockpit_glass_glass_0: THREE.Mesh
    center_center_0: THREE.Mesh
    monitors_displ_0: THREE.Mesh
    throttle_center_0: THREE.Mesh
    cockpit_cockpit_0: THREE.Mesh
    pedal_R_center_0: THREE.Mesh
    steering_center_0: THREE.Mesh
    pedal_L_center_0: THREE.Mesh
    ['placards_08_-_Default_0']: THREE.Mesh
  }
  materials: {
    glass: THREE.MeshStandardMaterial
    center: THREE.MeshStandardMaterial
    displ: THREE.MeshStandardMaterial
    cockpit: THREE.MeshStandardMaterial
    ['08_-_Default']: THREE.MeshStandardMaterial
  }
}

export function Spaceship(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/spaceship.glb') as any as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.069}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            geometry={nodes.cockpit_glass_glass_0.geometry}
            material={materials.glass}
            position={[0, 25.738, -108.968]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.center_center_0.geometry}
            material={materials.center}
            position={[0, 25.738, -108.968]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.monitors_displ_0.geometry}
            material={materials.displ}
            position={[0, 25.738, -108.968]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <group position={[2.568, 33.698, -11.917]}>
            <Handle translate="as-rotate" rotate="x" multitouch={false}>
              <mesh
                geometry={nodes.throttle_center_0.geometry}
                material={materials.center}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </Handle>
          </group>
          <mesh
            geometry={nodes.cockpit_cockpit_0.geometry}
            material={materials.cockpit}
            position={[0, 25.738, -108.968]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes.pedal_R_center_0.geometry}
            material={materials.center}
            position={[0, 25.738, -108.968]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <group position={[0, 33.857, -11.623]}>
            <Handle translate="as-rotate" rotate={{ y: false }} multitouch={false}>
              <mesh
                geometry={nodes.steering_center_0.geometry}
                material={materials.center}
                rotation={[-Math.PI / 2, 0, 0]}
              />
            </Handle>
          </group>
          <mesh
            geometry={nodes.pedal_L_center_0.geometry}
            material={materials.center}
            position={[0, 25.738, -108.968]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
          <mesh
            geometry={nodes['placards_08_-_Default_0'].geometry}
            material={materials['08_-_Default']}
            position={[0, 25.738, -108.968]}
            rotation={[-Math.PI / 2, 0, 0]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/spaceship.glb')
