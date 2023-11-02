import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 90rem;
  padding: 3.125rem 1.5rem;
  width: 100%;
`

export const HomeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1.25rem;
  margin: 2.5rem 0;
  width: 100%;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const LoadMoreButton = styled.div`
  text-align: center;
  outline: none;
  border: 0;
  border: 1rem;
  cursor: pointer;
  background: #2b3844;
  padding: 0.625rem 0.9375rem;
  border-radius: 0.9375rem;
  color: #fff;
  transition: filter 0.2s ease-in-out;
  max-width: 25rem;
  width: 100%;

  &:hover {
    filter: brightness(0.9);
  }
`
