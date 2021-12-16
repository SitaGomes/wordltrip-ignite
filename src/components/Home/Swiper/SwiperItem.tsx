import { Flex, VStack, Text, Center } from '@chakra-ui/react'
import React from 'react'

interface SwiperItem {
    url: string
    exert: string
}

export const SwiperItem: React.FC<SwiperItem> = ({children, url, exert}) => {
    return (
        <Center>
            <Flex
            justify="center"
            align="center"
            bgImage={url}
            bgRepeat="no-repeat"
            bgPosition="center"
            bgSize="cover"
            w={["100%", "1240px"]}
            h={["250px", "450px"]}
            >
                <VStack>
                    <Text color="gray.50" fontWeight="bold" fontSize={["2xl", "4xl"]}>{children}</Text>
                    <Text color="gray.100" fontWeight="bold" fontSize={["sm", "lg"]}>{exert}</Text>
                </VStack>
            </Flex>
        </Center>
    )
}
