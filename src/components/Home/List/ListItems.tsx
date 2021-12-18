import Link from "next/link"
import React from 'react'

import { Flex, Icon, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import { GoPrimitiveDot } from 'react-icons/go'

interface ListItemsProps { 
    src: string
}

export const ListItems: React.FC<ListItemsProps> = ({children, src}) => {

    const isWideScreen = useBreakpointValue({base: false, lg: true})

    return (
        <Flex align="center" flexDirection={["row", "row", "row", "column"]}>

            {isWideScreen ? (
                <Image mb="6" src={src}/>
            ) : (
                <Icon as={GoPrimitiveDot} color="brand.500" pr="2" />
            )}

            <Text fontWeight="medium" fontSize="lg">
                    {children}
            </Text>
        </Flex>
    )
}
