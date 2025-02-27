/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three'
import React, { MutableRefObject, useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { JSX } from 'react/jsx-runtime'
import { defaultApply, Handle } from '@react-three/handle'
import { degToRad } from 'three/src/math/MathUtils.js'

type GLTFResult = GLTF & {
  nodes: {
    body: THREE.Mesh
    lever: THREE.Mesh
  }
  materials: {
    lver: THREE.MeshStandardMaterial
  }
}

export function Lever({ openRef, ...props }: JSX.IntrinsicElements['group'] & { openRef: MutableRefObject<boolean> }) {
  const { nodes, materials } = useGLTF('lever.glb') as any as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.body.geometry}
        material={materials.lver}
        position={[-5.082, 6.427, 0]}
        rotation={[0, 0, Math.PI / 2]}
      />
      <group position={[-0.092, 4.208, 0.135]} rotation={[0, 0, Math.PI / 2]}>
        <Handle
          translate="as-rotate"
          apply={(state, target) => {
            if (state.current.rotation.z > degToRad(-20)) {
              openRef.current = false
            }
            if (state.current.rotation.z < degToRad(-115)) {
              openRef.current = true
            }
            defaultApply(state, target)
          }}
          scale={false}
          multitouch={false}
          rotate={{ x: false, y: false, z: [degToRad(-135), 0] }}
        >
          <mesh geometry={nodes.lever.geometry} material={materials.lver} />
        </Handle>
      </group>
    </group>
  )
}

useGLTF.preload('lever.glb')
