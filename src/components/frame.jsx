import { FrameScreen } from '@/styles/generalStyled'
import Image from 'next/image'
import React from 'react'
import aspiral from '@/images/aspiral().png'
import { Paragraph } from '@/styles/textComponents'

export const Frame = () => {
    return (
        <>
            <FrameScreen>
                <Image src={aspiral} quality={100}
                    style={{
                        width: '100%',
                        height: 'auto',
                        zIndex: '0',
                        objectFit: 'none',
                        border: 'solid 1px #000',
                        padding: '2.5rem'
                    }}
                />
                <Paragraph fontSize={'1rem'} color={'#000'}  style={{position: 'absolute', bottom: '.25rem', right: '2.3125rem'}}>"Aspiral()" - Edu Stadler</Paragraph>
            </FrameScreen>
        </>
    )
}