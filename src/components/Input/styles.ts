import styled from 'styled-components'

export const InputContainer = styled.div`
  border-radius: 5px;
  background: #2B3844;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
  border: 0;
  display: flex;
  align-items: center;
  gap: 1.125rem;
  padding: .75rem 1.5rem;
  
  & > input {
    background: transparent;
    outline: none;
    border: none;
    color: #FFF;

    &::placeholder {
      color: #FFFFFF;
    }
  }
`