import { Text, Flex, HStack } from "@chakra-ui/react";
import { NextPage } from "next";

type InfoProps = {
    exert: string
}

export const Info: NextPage<InfoProps> = ({exert, children}) => {
    return (
        <Flex w={["100%", "100%", "100%", "1160px"]} margin="auto" justify="center">

          <Flex flexWrap={["wrap", "nowrap"]} gap={["0", "8"]} m="4" mt="6">
            <Text align="justify" w={["100%", "600px"]} fontSize={["sm", "lg"]}>{exert}</Text>

            
            {children}

          </Flex>

        </Flex>
    )
}