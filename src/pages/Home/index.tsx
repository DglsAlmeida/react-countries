import { useMemo, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { CountryCard } from '../../components/CountriesCard'
import { Input } from '../../components/Input'
import { useCountries } from '../../services/hooks/useCountriesQuery'
import * as S from './styles'

const Home = () => {
  const { data, isLoading } = useCountries()
  const [search, setSearch] = useState('')
  const [itemsQuantityOnTheScreen, setItemsQuantityOnTheScreen] = useState(12)

  const totalCountries = data?.length
  const itemsOnCurrentPage = data?.slice(0, itemsQuantityOnTheScreen)

  const filteredCountries = useMemo(
    () =>
      search.length > 0
        ? data?.filter((coutry) => coutry.name.common.includes(search))
        : [],
    [data, search],
  )

  const loadMoreCountries = () => {
    if (itemsQuantityOnTheScreen < totalCountries!) {
      setItemsQuantityOnTheScreen(itemsQuantityOnTheScreen + 12)
    }
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const str = e.target.value
    const searchWithCapitalizedFLetter =
      str.substring(0, 1).toUpperCase() + str.substring(1)
    setSearch(searchWithCapitalizedFLetter)
  }

  return (
    <S.HomeContainer>
      <Input
        name="search"
        placeholder="Search for a country..."
        onChange={handleSearch}
        value={search}
        icon={AiOutlineSearch}
      />
      <S.HomeContent>
        {search
          ? filteredCountries?.map((country) => (
              <CountryCard
                key={country.name.common}
                imgUrl={country.flags.svg}
                name={country.name.common}
                population={country.population}
                region={country.region}
                isLoading={isLoading}
                capital=""
              />
            ))
          : itemsOnCurrentPage?.map((country) => (
              <CountryCard
                key={country.name.common}
                imgUrl={country.flags.svg}
                name={country.name.common}
                population={country.population}
                region={country.region}
                isLoading={isLoading}
                capital=""
              />
            ))}
      </S.HomeContent>
      {!search && <button onClick={loadMoreCountries}>Load more...</button>}
    </S.HomeContainer>
  )
}

export default Home
