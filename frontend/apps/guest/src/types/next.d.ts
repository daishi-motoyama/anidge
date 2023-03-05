import type { NextPage, NextPageWithLayout } from 'next'
import type { AppProps } from 'next/app'

declare module 'next' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP>
}

declare module 'next/app' {
  // eslint-disable-next-line @typescript-eslint/ban-types
  type AppPropsWithLayout<P = {}> = AppProps<P> & {
    Component: NextPageWithLayout<P>
  }
}
