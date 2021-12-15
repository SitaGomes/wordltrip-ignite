import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        gray: {
            "700": "#47585B",
            "400": "#999999",
            "100": "#DADADA",
            "50": "#F5F8FA",
        },
        brand: {
            "500": "#FFBA08",
        }
    },
    fonts: {
        heading: "Poppins",
        body: "Poppins"
    },
    styles: {
        global: {
            body: {
                bg: "gray.50",
                color: "gray.700",
            }
        }
    }
})