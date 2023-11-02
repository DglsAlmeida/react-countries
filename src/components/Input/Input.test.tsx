import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Input } from '.'

describe('<Input />', () => {
  it('should render button correctly', () => {
    render(<Input name="test" placeholder="Test" />)

    expect(screen.getByPlaceholderText('Test')).toBeInTheDocument()
  })

  it('should execute the onClick event', async () => {
    const user = userEvent.setup()

    render(<Input name="test" />)

    const inputElement = screen.getByRole('textbox')

    await user.type(inputElement, 'Hello, World!')

    expect(inputElement).toHaveValue('Hello, World!')
  })
})
