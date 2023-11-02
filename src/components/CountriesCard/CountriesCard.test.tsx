import { render, screen } from '@testing-library/react'
import { CountryCard } from '.'

describe('<CountryCard />', () => {
  it('should render button correctly', () => {
    const props = {
      imgUrl: '',
      name: 'Brazil',
      population: 212559409,
      region: 'Americas',
      capital: '',
      isLoading: false,
    }

    render(<CountryCard {...props} />)

    expect(screen.getByText('Brazil')).toBeInTheDocument()
  })
  it('should render skeleton loading correctly', () => {
    const props = {
      imgUrl: '',
      name: 'Brazil',
      population: 212559409,
      region: 'Americas',
      capital: '',
      isLoading: true,
    }

    render(<CountryCard {...props} />)

    expect(screen.getByTestId('skeleton-loading')).toHaveStyle(
      'background-image: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);',
    )
  })
})
