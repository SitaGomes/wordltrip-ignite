import React from 'react'

import { Center, Link, VStack } from '@chakra-ui/react'

import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Navigation, Pagination} from "swiper"

import { SwiperLabel } from './Label'
import { SwiperItem } from './SwiperItem'

import 'swiper/css'
import 'swiper/css/navigation'
import "swiper/css/pagination"

interface HomeSwiperProps {
    props: {
        continents: string[],
        exerts: string[],
        urls: string[],
        ids: string[]
    }
}

SwiperCore.use([Pagination]);

export const HomeSwiper: React.FC<HomeSwiperProps> = ({props}) => {

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
                pagination={true}
                navigation
                centeredSlides
            >
                {props.continents.map((continent, index) => (

                    <SwiperSlide key={continent}>

                        <Link href={`/continents/${props.ids[index]}`}>
                            <SwiperItem url={`/contries/${props.urls[index]}`} exert={props.exerts[index]} >
                                {continent}
                            </SwiperItem>
                        </Link>

                    </SwiperSlide>
                ))}
            </Swiper>   
        </>
    )
}
