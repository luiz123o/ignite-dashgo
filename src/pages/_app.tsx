import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import Head from 'next/head'
import { theme } from 'styles/theme'
import { SideDrawerProvider } from 'contexts/SideBarDrawerContext'
import { makeServer } from 'services/mirage'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}
const queryClient = new QueryClient()

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/favicon-ipr.png" />
        <link rel="apple-touch-icon" href="/img/favicon-ipr.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="boilerplate" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={theme}>
          <SideDrawerProvider>
            <Component {...pageProps} />
          </SideDrawerProvider>
        </ChakraProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  )
}

export default App
