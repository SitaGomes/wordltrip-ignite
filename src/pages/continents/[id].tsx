import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { GetServerSideProps, NextPage } from 'next/types'

import {IoIosArrowBack} from "react-icons/io"

import { Box, Button, Center, Flex, Icon, Text } from '@chakra-ui/react'
import { Header } from '../../components/Header'

interface ContinentPageProps {
  data: {
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
          {id.charAt(0).toUpperCase() + id.slice(1)} | WordlTrip
        </title>
      </Head>

      <Box>
        
        <Flex justify="center">

          <Flex w={["100%", "1160px"]}>
            <Button variant='link' justifyContent="flex-start">
              <Link href="/">
                <Icon as={IoIosArrowBack} fontSize="lg" />
              </Link>
            </Button>
            
            <Center w="100%"> 
              <Header />
            </Center>
          </Flex>

        </Flex>

        <Flex
          bgImage={`/contries/${id}.jpg`}
          bgPos="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          justify="center"
        >
          <Flex w={["100%", "1160px"]} h={["150px", "500px"]} align={["center", "flex-end"]} justify={["center", "flex-start"]}>
            
            <Text
              align={["center", "left"]}
              color="gray.50"
              py={["0", "14"]}
              fontSize={["3xl", "4xl"]}
              fontWeight="semibold"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </Text>

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