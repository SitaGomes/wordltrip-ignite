import { Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

export const Header: React.FC = () => {
    return (
        <Heading>
            <Flex justify="center" w="100%" p="4">
                <Image src="/logo.png" />
            </Flex>
        </Heading>
    )
}
