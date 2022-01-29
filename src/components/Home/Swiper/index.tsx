import React from 'react'

import { Box, Center, VStack, Image } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import {Navigation} from "swiper"

import { SwiperLabel } from './Label'

import 'swiper/css'
import 'swiper/css/navigation'
import { SwiperItem } from './SwiperItem'

interface HomeSwiperProps {
    props: {
        continents: string[],
        exerts: string[],
        urls: string[]
    }
}

export const HomeSwiper: React.FC<HomeSwiperProps> = ({props}) => {

    console.log(props)

    return (
        <>
            <Center py="6">
                <VStack>
                    <SwiperLabel> Vamos nessa? </SwiperLabel> 
                    <SwiperLabel> Então escolha seu continente </SwiperLabel>
                </VStack>
            </Center>

            <Swiper
                modules={[Navigation]}
                navigation
                centeredSlides
            >
                
                {props.continents.map((continent, index) => (
                    <SwiperSlide key={continent}>
                        <SwiperItem url={`/${props.urls[index]}`} exert={props.exerts[index]} > 
                            {continent}
                        </SwiperItem>
                    </SwiperSlide>
                ))}
            </Swiper>   
        </>
    )
}
