import { Flex, Text } from "@chakra-ui/react"
import { NextPage } from "next/types"

interface BannerProps {
    id: string,
    countryName: string
}

export const Banner: NextPage<BannerProps> = ({id, countryName}) => {
    return (
        <Flex
          bgImage={`/contries/${id}.jpg`}
          bgPos="center"
          bgRepeat="no-repeat"
          bgSize="cover"
          justify="center"
        >
          <Flex w={["100%", "1160px"]} h={["150px", "500px"]} align={["center", "flex-end"]} justify={["center", "flex-start"]}>
            
            <Text
              align={["center", "left"]}
              color="gray.50"
              py={["0", "14"]}
              fontSize={["3xl", "4xl"]}
              fontWeight="semibold"
            >
              {countryName}
            </Text>

          </Flex>

        </Flex>
    )
}