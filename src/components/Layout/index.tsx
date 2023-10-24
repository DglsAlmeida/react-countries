import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { queryClient } from "../../services/query"
import { GlobalStyles } from "../../styles/global"
import { Header } from '../Header'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <main
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </main>
      <GlobalStyles />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}