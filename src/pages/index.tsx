import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import HeadSlice from '../slices/HeadSlice';

const inter = Inter({ subsets: ['latin'] })

const Main = () => <main>
  <HeadSlice />
</main>

export default function Home() {
  return (
    <>
      <Head>
        <title>17. Sesja Linuksowa</title>
        <meta name="description" content="17. Sesja Linuksowa" />
        <meta content='17. Sesja Linuksowa' property='og:site_name'></meta>
        <meta content='pl_PL' property='og:locale'></meta>
        <meta content='17. Sesja Linuksowa | Wrocław, Polska' property='og:title'></meta>
        <meta content='http://17.sesja.linuksowa.pl/' property='og:url'></meta>
        <meta content='Sesja Linuksowa to największa w Polsce konferencja poświęcona rozwiązaniom Open Source oraz najnowszym trendom w systemach z rodziny GNU/Linux.' property='og:description'></meta>
        <meta content='website' property='og:type'></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link type='image/x-icon' rel="icon" href="/favicon.ico" />
        
      </Head>
<Main/>
    </>
  )
}
