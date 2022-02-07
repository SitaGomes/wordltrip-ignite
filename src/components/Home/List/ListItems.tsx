import React from 'react'

import { Flex, Icon, Text } from '@chakra-ui/react'
import { GoPrimitiveDot } from 'react-icons/go'


export const ListItems: React.FC = ({children}) => {
    return (
        <Flex align="center">
            <Text fontWeight="medium" fontSize="lg">
                <Icon as={GoPrimitiveDot} color="brand.500" pr="2" />
                    {children}
            </Text>
        </Flex>

    )
}
