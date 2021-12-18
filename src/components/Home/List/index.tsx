import React from 'react'

import { ListItems } from './ListItems'

import { Center, HStack } from '@chakra-ui/react'

export const HomeList = () => {
    return (
      <Center>
        
        <Center py="10" px={["0", "4", "4"]} w={["275px", "1240px"]} justify="center">
          
          <HStack flexWrap="wrap" w="100%" justify={["space-around", "space-between"]} gap="4" >
            <ListItems src="/list-icons/building.png"> vida noturna </ListItems>
            <ListItems src="/list-icons/cocktail.png"> praia </ListItems>
            <ListItems src="/list-icons/earth.png"> moderno </ListItems>
            <ListItems src="/list-icons/museum.png"> clássico </ListItems>
            <ListItems src="/list-icons/surf.png"> e mais.. </ListItems>
          </HStack>
            
        </Center>

      </Center>
    )

}
