import Head from 'next/head'
import type { NextPage } from 'next'

import { Box, Divider, Center, VStack } from '@chakra-ui/react'

import { Header } from '../components/Header'
import { HomeBanner } from '../components/Home/Banner'
import { HomeList } from '../components/Home/List'
import { SwiperLabel } from '../components/Home/Swiper/Label'

const Home: NextPage = () => {
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

        <Center py="6">
          <VStack>
            <SwiperLabel> Vamos nessa? </SwiperLabel> 
           <SwiperLabel> Então escolha seu continente </SwiperLabel>
          </VStack>
        </Center>

      </Box>
    </>
  )
}

export default Home
