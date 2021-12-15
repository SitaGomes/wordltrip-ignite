import { Heading, Image } from '@chakra-ui/react'
import React from 'react'

export const Header: React.FC = () => {
    return (
        <Heading>
            <Image src="/logo.png" />
        </Heading>
    )
}
