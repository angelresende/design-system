import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$cyan',
  border: '1px solid $secondary',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
