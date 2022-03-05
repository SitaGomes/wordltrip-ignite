import React from 'react'
import Head from 'next/head'
import { GetServerSideProps, NextPage } from 'next/types'


import { Box, HStack } from '@chakra-ui/react'
import { HeaderBar } from '../../components/Continents/Header'
import { Banner } from '../../components/Continents/Banner'
import { InfoBox } from '../../components/Continents/InfoBox'
import { Info } from '../../components/Continents/Info'

interface ContinentPageProps {
  data: {
    name: string;
    cities: [
      {
        name: string,
        country: string, 
        url: string
      }
    ],
    info: {
      country_number: string, 
      languagues: string,
      exert: string, 
      plus_100: string
    }
  },
  id: string
}

//max-width 1160px

const ContinentPage: NextPage<ContinentPageProps> = ({data, id}) => {

  console.log(data)

  return (
    <>
    
      <Head>
        <title>
          {data.name} | WordlTrip
        </title>
      </Head>

      <Box>
        
        <HeaderBar />

        <Banner id={id} countryName={data.name}/>

        {/* Continent's content */}
        <Info exert={data.info?.exert}>
          
          <HStack align={["flex-end", "center"]} justify="space-between" w={["100%", "400px"]}>
            <InfoBox information={data.info?.country_number}>países</InfoBox>
            <InfoBox information={data.info?.languagues}>línguas</InfoBox>
            <InfoBox information={data.info?.plus_100}>cidades +100</InfoBox>
          </HStack>
          
        </Info>
      
      </Box>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({params}) => {

  //@ts-ignore
  const {id} = params

  const response = await fetch(`http://localhost:3333/${id}`)
  
  const data = await response.json()
  
  return {
    props: {data, id}
  }
}

export default ContinentPage