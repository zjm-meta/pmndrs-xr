import {
  ForwardRefExoticComponent,
  PropsWithoutRef,
  RefAttributes,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react'
import { Group, Vector3Tuple } from 'three'
import { HandlesContext } from '../context.js'
import { HandleOptions, HandleTransformOptions } from '@pmndrs/handle'
import { GroupProps } from '@react-three/fiber'
import { FreeScaleControl } from './free.js'
import { HandlesAxisHighlight } from '../axis.js'
import { AxisScaleHande } from './axis.js'
import { PlaneScaleHandle } from './plane.js'

export type ScaleHandlesProperties = Omit<GroupProps, 'scale'> &
  HandleOptions<any> & { enabled?: Exclude<HandleTransformOptions, Vector3Tuple> }

export const ScaleHandles: ForwardRefExoticComponent<PropsWithoutRef<ScaleHandlesProperties> & RefAttributes<Group>> =
  forwardRef<Group, ScaleHandlesProperties>(
    (
      { children, alwaysUpdate, scale, rotate, translate, multitouch, apply, stopPropagation, enabled, ...props },
      ref,
    ) => {
      const groupRef = useRef<Group>(null)
      useImperativeHandle(ref, () => groupRef.current!, [])
      return (
        <HandlesContext
          alwaysUpdate={alwaysUpdate}
          scale={scale}
          rotate={rotate}
          translate={translate}
          multitouch={multitouch}
          apply={apply}
          stopPropagation={stopPropagation}
          targetRef={groupRef}
        >
          <group {...props}>
            {/** XY */}
            <PlaneScaleHandle
              enabled={enabled}
              color={0x0000ff}
              hoverColor={0xffff00}
              opacity={0.5}
              hoverOpacity={1}
              tag="xy"
            />

            {/** XZ */}
            <PlaneScaleHandle
              enabled={enabled}
              rotation-x={Math.PI / 2}
              color={0x00ff00}
              hoverColor={0xffff00}
              opacity={0.5}
              hoverOpacity={1}
              tag="xz"
            />

            {/** YZ */}
            <PlaneScaleHandle
              enabled={enabled}
              rotation-y={-Math.PI / 2}
              color={0xff0000}
              hoverColor={0xffff00}
              opacity={0.5}
              hoverOpacity={1}
              tag="yz"
            />

            {/** X */}
            <AxisScaleHande enabled={enabled} color={0xff0000} hoverColor={0xffff00} opacity={1} tag="x" />
            <AxisScaleHande
              enabled={enabled}
              color={0xff0000}
              hoverColor={0xffff00}
              opacity={1}
              invert
              showHandleLine={false}
              tag="x"
            />
            <HandlesAxisHighlight tag="x" enabled={enabled} />

            {/** Y */}
            <AxisScaleHande
              enabled={enabled}
              rotation-z={Math.PI / 2}
              color={0x00ff00}
              hoverColor={0xffff00}
              opacity={1}
              tag="y"
            />
            <AxisScaleHande
              enabled={enabled}
              rotation-z={Math.PI / 2}
              color={0x00ff00}
              hoverColor={0xffff00}
              opacity={1}
              invert
              showHandleLine={false}
              tag="y"
            />
            <HandlesAxisHighlight enabled={enabled} rotation-z={Math.PI / 2} tag="y" />

            {/** Z */}
            <AxisScaleHande
              rotation-y={-Math.PI / 2}
              enabled={enabled}
              color={0x0000ff}
              hoverColor={0xffff00}
              opacity={1}
              tag="z"
            />
            <AxisScaleHande
              rotation-y={-Math.PI / 2}
              enabled={enabled}
              color={0x0000ff}
              hoverColor={0xffff00}
              opacity={1}
              invert
              showHandleLine={false}
              tag="z"
            />
            <HandlesAxisHighlight rotation-y={-Math.PI / 2} enabled={enabled} tag="z" />

            <FreeScaleControl enabled={enabled} />

            <group ref={groupRef}>{children}</group>
          </group>
        </HandlesContext>
      )
    },
  )

export * from './free.js'
export * from './axis.js'
export * from './plane.js'
