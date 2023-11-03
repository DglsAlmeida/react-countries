import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5rem;
  background: ${({ theme }) => theme.colors.slateBlue};
  padding: 0 0.9375rem;

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 5rem;
  }
`

export const Title = styled.span`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fonts.size.sm};
  font-weight: 800;

  @media screen and (min-width: 768px) {
    font-size: ${({ theme }) => theme.fonts.size.xxl};
  }
`

export const DarkModeButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.white};
  background: transparent;
  border: none;
  outline: none;
  font-size: ${({ theme }) => theme.fonts.size.xs};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 1rem;
  }
`
