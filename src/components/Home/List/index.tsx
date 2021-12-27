import React from 'react'

import { ListItems } from './ListItems'

import { Flex, HStack } from '@chakra-ui/react'

export const HomeList = () => {
    return (
        <Flex p="10" >
          
          <HStack flexWrap="wrap" w="100%" justify="space-around" gap="4">
            <ListItems> vida noturna </ListItems>
            <ListItems> praia </ListItems>
            <ListItems> moderno </ListItems>
            <ListItems> clássico </ListItems>
            <ListItems> e mais.. </ListItems>
          </HStack>
            
        </Flex>
    )
}
