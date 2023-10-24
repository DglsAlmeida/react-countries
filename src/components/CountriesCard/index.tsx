import { memo } from 'react';
import * as S from './styles';

interface CountryCardProps {
  imgUrl: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  isLoading: boolean;
}

const CountryCardMemoized = ({
  imgUrl,
  name,
  population,
  region,
  capital,
  isLoading,
}: CountryCardProps) => {
  return (
    <S.CountryCardContainer>
      <S.ImgContainer>
        {isLoading ? <S.SkeletonLoader /> : <img src={imgUrl} alt="Country Flag" />}
      </S.ImgContainer>

      <S.CountryCardContent>
        <S.CountryName>{name}</S.CountryName>
        <S.CountryDetails><strong>Population:</strong> {population}</S.CountryDetails>
        <S.CountryDetails><strong>Region:</strong> {region}</S.CountryDetails>
        <S.CountryDetails><strong>Capital:</strong> {capital}</S.CountryDetails>
      </S.CountryCardContent>
    </S.CountryCardContainer>
  )
}

export const CountryCard = memo(CountryCardMemoized)