import '../styles/global.css'
import type { AppProps } from 'next/app'
import { Inter, Roboto, Roboto_Mono } from 'next/font/google'

export const inter = Inter({ 
    weight: ['400', '500', '600'],
    subsets: ['latin'] 
})

export const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const robotoMono = Roboto_Mono({
    weight: '400',
    subsets: ['latin'],
  })
  

export default function MyApp({ Component, pageProps }: AppProps) {
  return ( <Component {...pageProps} /> )
}
