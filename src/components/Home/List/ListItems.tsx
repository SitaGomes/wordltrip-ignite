import { Center, Flex, Icon, Text } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
import { GoPrimitiveDot } from 'react-icons/go'

interface ListItemsProps {
    children: ReactNode
}

export const ListItems = ({children}:ListItemsProps) => {
    return (
        <Flex align="center">
            <Text fontWeight="medium" fontSize="lg">
                <Icon as={GoPrimitiveDot} color="brand.500" pr="2" />
                    {children}
            </Text>
        </Flex>

    )
}
