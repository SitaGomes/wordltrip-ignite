import { Box, Flex, Heading, Image, Text, useBreakpointValue, VStack } from '@chakra-ui/react'
import React from 'react'

export const HomeBanner: React.FC = () => {

  const isWideScreen = useBreakpointValue({base: false, lg: true})


  return (
    <Flex
      bgImage="/assets/background.png"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      justify="space-around"
      p={["8", "8", "8", "0"]}
    >
      <VStack justify="center" align="start">

        <VStack align="start" spacing="1">
          <Heading
            fontWeight="medium"
            fontSize={['xl', "3xl"]}
            color="gray.50"
          >
            5
            Continentes,
          </Heading>

          <Heading
            fontWeight="medium"
            fontSize={['xl', "3xl"]}
            color="gray.50"
          >
              infinitas
              possibilidades.
          </Heading>
        </VStack>
        
        <Text fontSize={["sm", "md"]} pt="2" color="gray.100">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
      </VStack>

      {!!isWideScreen && ( <Image  src="/assets/airplane.png"/> )}

    </Flex>
  )
}
