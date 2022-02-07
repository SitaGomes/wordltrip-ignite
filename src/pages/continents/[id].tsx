import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { GetServerSideProps, NextPage } from 'next/types'


import { Box, Button, Center, Flex, Icon, Text } from '@chakra-ui/react'
import { HeaderBar } from '../../components/Continents/Header'
import { Banner } from '../../components/Continents/Banner'

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
      city_number: string, 
      laguagues: string,
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

        {/* Content */}
        <Flex w={["100%", "100%", "100%", "1160px"]} margin="auto">

          <Flex flexWrap={["wrap", "nowrap"]} m="4" mt="6">
            <Box fontSize="sm">{data.info.exert}</Box>

            <Box mt="4">

              <Flex flexDir="column" align={["left", "center"]}>
                <Text fontWeight="semibold" color="brand.500" fontSize="2xl">{data.info.city_number}</Text>
                <Text>países</Text>
              </Flex>
              
            </Box>

          </Flex>

        </Flex>
      
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