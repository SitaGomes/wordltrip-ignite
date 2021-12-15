import React from 'react'
import { Text } from '@chakra-ui/react'

interface SwiperLabelProps {
    children: React.ReactNode
}

export const SwiperLabel = ({children}: SwiperLabelProps) => {
    return (
        <Text
          fontWeight="medium"
          fontSize={["lg",
          "2xl"]}
          >
              {children}
        </Text>
    )
}
