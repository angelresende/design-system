import { styled } from '../../styles'

export const TextInputContainer = styled('div', {
  backgroundColor: '$greenLight',
  padding: '$3 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  border: '2px solid $secondary',
  display: 'flex',
  alignItems: 'baseline',

  '&:has(input:focus)': {
    borderColor: '$green300',
  },

  '&:has(input:disabled)': {
    opacity: 0.5,
    cursor: 'not-allowed',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray100',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$secondary',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:placeholder': {
    color: '$gray400',
  },
})
