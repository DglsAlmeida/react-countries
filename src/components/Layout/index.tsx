import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from '../../services/query'
import { GlobalStyles } from '../../styles/global'
import { Header } from '../Header'
import * as S from './styles'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <S.Main>{children}</S.Main>
      <GlobalStyles />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
