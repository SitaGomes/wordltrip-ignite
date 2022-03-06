import { Text, Flex, HStack } from "@chakra-ui/react";
import { NextPage } from "next";

type InfoProps = {
    exert: string
}

export const Info: NextPage<InfoProps> = ({exert, children}) => {
    return (
        <Flex w={["100%", "100%", "100%", "1160px"]} flexWrap={["wrap", "nowrap"]} marginY="12" px={["4", "0"]} marginX="auto" justify="space-between">
          <Text align="justify" w={["100%", "600px"]} fontSize={["sm", "lg"]}>{exert}</Text>
          
          {children}

        </Flex>
    )
}