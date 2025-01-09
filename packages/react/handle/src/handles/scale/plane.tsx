import { GroupProps } from '@react-three/fiber'
import { ColorRepresentation, Vector3Tuple } from 'three'
import { RegisteredHandle } from '../context.js'
import { MeshHandlesContextMaterial } from '../material.js'
import { HandleTransformOptions } from '@pmndrs/handle'
import { useExtractHandleTransformOptions } from '../utils.js'

export type PlaneScaleHandleProperties = {
  enabled?: Exclude<HandleTransformOptions, Vector3Tuple>
  tag: 'xy' | 'yz' | 'xz'
  color: ColorRepresentation
  opacity: number
  hoverColor?: ColorRepresentation
  hoverOpacity?: number
} & GroupProps

export function PlaneScaleHandle({
  tag,
  color,
  hoverColor,
  opacity,
  hoverOpacity,
  scale,
  enabled,
  ...props
}: PlaneScaleHandleProperties) {
  const scaleOptions = useExtractHandleTransformOptions(tag, enabled)
  if (scaleOptions === false) {
    return null
  }
  return (
    <RegisteredHandle {...props} tag={tag} scale={scaleOptions} rotate={false} translate="as-scale" multitouch={false}>
      <mesh position={[0.15, 0.15, 0]}>
        <boxGeometry args={[0.2, 0.2, 0.01]} />
        <MeshHandlesContextMaterial
          tag={tag}
          color={color}
          opacity={opacity}
          hoverOpacity={hoverOpacity}
          hoverColor={hoverColor}
        />
      </mesh>
    </RegisteredHandle>
  )
}
