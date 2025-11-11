import { colors } from '@/styles'
import styled from 'styled-components'

interface InputGroupProps {
  $maxWidth?: string
}

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.$maxWidth || 'auto'};

  label {
    font-size: 14px;
    display: block;
    font-weight: bold;
  }

  input {
    background-color: ${colors.secondary};
    border: 2px solid ${colors.secondary};
    height: 32px;
    margin: 8px 0;
    padding: 0 8px;
    width: 100%;

    &.error {
      border: 2px solid red;
      outline: 1px solid rgba(0, 0, 0, 0.2);
    }
}

`

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`