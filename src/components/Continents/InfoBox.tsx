import { Box, Flex, Text } from "@chakra-ui/react";
import { NextPage } from "next/types";

type InfoBoxProps = {
    information: string,
}

export const InfoBox: NextPage<InfoBoxProps> = ({children, information}) => {
    return(
        <Box mt={["4", "0"]}>
            <Flex flexDir="column" align={["left", "center"]}>
                <Text fontWeight="semibold" color="brand.500" fontSize={["2xl", "4xl"]}>{information}</Text>
                <Text fontWeight="semibold">{children}</Text>
            </Flex>
        </Box>
    )
}