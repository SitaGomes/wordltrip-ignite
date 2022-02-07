import Head from 'next/head'
import type { GetServerSideProps, NextPage } from 'next'

import { Box, Divider, Center } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { HomeBanner } from '../components/Home/Banner'
import { HomeList } from '../components/Home/List'
import { HomeSwiper } from '../components/Home/Swiper'

interface HomeProps {
  data: {
    continents: string[],
    exerts: string[],
    urls: string[],
    ids: string[]
  }
}

const Home: NextPage<HomeProps> = ({data}) => {

  return (
    <>
      <Head>
        <title>WorldTrip | Home</title>
      </Head>

      <Box>

        <Header />

        <HomeBanner />

        <HomeList />

        <Center>
          <Divider w="16" borderColor="gray.700"/>
        </Center>

        <HomeSwiper props={data}/>

        <Box m="8" />

      </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {

  const response = await fetch("http://localhost:3333/continents")
  const exertResponse = await fetch("http://localhost:3333/exerts")
  const urlResponse = await fetch("http://localhost:3333/urls")
  const idsResponse = await fetch("http://localhost:3333/ids")

  const continents = await response.json()
  const exerts = await exertResponse.json()
  const urls = await urlResponse.json()
  const ids = await idsResponse.json()

  const data = {
    continents,
    exerts,
    urls,
    ids
  }

  return {
    props: {data}
  }
}

export default Home
