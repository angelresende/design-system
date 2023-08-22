import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@ufenesp-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: <Text>Testando o elemento Box + Text</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
