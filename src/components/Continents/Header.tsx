import { Button, Center, Flex, Icon, Link } from '@chakra-ui/react'
import { NextPage } from 'next/types'
import { IoIosArrowBack } from 'react-icons/io'
import { Header } from '../Header'


export const HeaderBar: NextPage = () => {
    return(
        <Flex justify="center">

          <Flex w={["100%", "1160px"]}>
            <Button variant='link' justifyContent="flex-start">
              <Link href="/">
                <>
                  <Icon as={IoIosArrowBack} fontSize="lg" />
                </>
              </Link>
            </Button>
            
            <Center w="100%"> 
              <Header />
            </Center>
          </Flex>

        </Flex>
    )
} 