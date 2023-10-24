import { useQuery } from '@tanstack/react-query'
import { api } from '../api'

export interface Country {
  name: {
    common: string
  }
  region: string
  population: number
  capital: string[]
  flags: {
    svg: string
  }
}

export const getCountries = async () => {
  const { data } = await api.get('/all')
  return data as Country[]
}

export const useCountries = () => {
  return useQuery<Country[]>({ queryKey: ['countries'], queryFn: getCountries })
}
