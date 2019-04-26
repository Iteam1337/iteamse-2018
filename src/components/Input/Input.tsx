import styled from '../../theme'

const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.alabaster};
  border-radius: 5px;
  border: none;
  color: #000;
  display: inline-block;
  font-family: inherit;
  font-size: 18px;
  font-weight: 300;
  outline: none;
  padding: 12px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.emperor};
  }
`

const TextArea = styled(Input.withComponent('textarea'))`
  overflow: auto;
`

export { Input as default, TextArea }
