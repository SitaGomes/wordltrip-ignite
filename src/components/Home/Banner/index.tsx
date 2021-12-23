import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export const HomeBanner: React.FC = () => {
    return (
        <Flex>
          <Box bgImage="/background.png" bgPosition="center" p="6">
            <Heading fontWeight="medium" fontSize="xl" color="gray.50">5 Continentes, infinitas possibilidades.</Heading>
            <Text fontSize="sm" pt="2" color="gray.100">Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
          </Box>
        </Flex>
    )
}
