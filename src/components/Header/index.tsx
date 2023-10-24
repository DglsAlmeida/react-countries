import { BsFillMoonFill } from 'react-icons/bs'
import * as S from './styles'

export const Header = () => {
  return (
    <S.Header>
      <S.Title>Where in the world ?</S.Title>
      <S.DarkModeButton>
        <BsFillMoonFill />
        Dark Mode
      </S.DarkModeButton>
    </S.Header>
  )
}