import React from 'react'
import Head from 'next/head'
import { GetServerSideProps, NextPage } from 'next/types'


import { Box, Text, HStack, Flex, Image } from '@chakra-ui/react'
import { HeaderBar } from '../../components/Continents/Header'
import { Banner } from '../../components/Continents/Banner'
import { InfoBox } from '../../components/Continents/InfoBox'
import { Info } from '../../components/Continents/Info'

interface ContinentPageProps {
  data: {
    country_name: string;
    country_code: string;
    cities: [
      {
        city_name: string,
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


  return (
    <>
    
      <Head>
        <title>
          {data.country_name} | WordlTrip
        </title>
      </Head>

      <Box>
        
        <HeaderBar />

        <Banner id={id} countryName={data.country_name}/>

        {/* Continent's content */}
        <Info exert={data.info?.exert}>

          <HStack align={["flex-end", "center"]} justify="space-between" w={["100%", "400px"]}>
            <InfoBox information={data.info?.country_number}>países</InfoBox>
            <InfoBox information={data.info?.languagues}>línguas</InfoBox>
            <InfoBox information={data.info?.plus_100}>cidades +100</InfoBox>
          </HStack>
          
        </Info>

        <Box>
          <Text mb="6">Cidades +100</Text>

          <Flex flexDirection={"column"} align="center" gap="4">
            {data.cities.map((city) => (
            
              <Box key={city.city_name} w="250px">
                <Image borderTopRadius="md" boxSize="250px" src={`/cities/${data.country_code}/${city.url}`} />
                
                <Box borderTopWidth="1" border="1px solid" borderColor="brand.500" background="white" p="4">
                  <Flex flexDirection="column">
                    <Text> {city.city_name} </Text>
                    <Text color="gray.700"> {city.country} </Text>
                  </Flex>
                  <Image></Image>
                </Box>
              
              </Box>
            
            ))}
          </Flex>
        </Box>
      
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