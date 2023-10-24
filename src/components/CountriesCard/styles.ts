import styled, { keyframes } from 'styled-components'

export const CountryCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 5px;
  background: #2b3844;
  box-shadow: 0px 0px 7px 2px rgba(0, 0, 0, 0.03);
`

export const ImgContainer = styled.div`
  height: 10rem;
  width: 100%;
  background: #202020;

  img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
`

export const CountryCardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  padding: 1.5rem 1.5rem 2.875rem;
  color: #fff;
`

export const CountryName = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 1rem;
`

export const CountryDetails = styled.span`
  font-size: 0.875rem;
`

export const loadingAnimation = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`

export const SkeletonLoader = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: ${loadingAnimation} 1.5s infinite;
`
