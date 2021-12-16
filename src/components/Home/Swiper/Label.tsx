import React from 'react'
import { Text } from '@chakra-ui/react'

export const SwiperLabel: React.FC = ({children}) => {
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
