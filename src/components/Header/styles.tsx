import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  background-color: #2b3844;
  padding: 0 0.9375rem;

  @media screen and (min-width: 768px) {
    padding: 0 5rem;
  }
`

export const Title = styled.span`
  color: #fff;
  font-size: 0.875rem;
  font-weight: 800;

  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`

export const DarkModeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #fff;
  background: transparent;
  border: none;
  outline: none;
  font-size: 0.75rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`
