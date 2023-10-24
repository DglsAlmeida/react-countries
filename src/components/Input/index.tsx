import { InputHTMLAttributes } from 'react'
import { IconBaseProps } from 'react-icons'
import * as S from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  icon?: React.ComponentType<IconBaseProps>
}

export const Input = ({ name, icon: Icon, ...rest }: InputProps) => {
  return (
    <S.InputContainer>
      {Icon && <Icon size={20} color="#FFF" />}
      <input name={name} {...rest} />
    </S.InputContainer>
  )
}
