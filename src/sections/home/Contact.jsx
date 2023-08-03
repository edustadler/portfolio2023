import Weather from "@/components/Weather"
import { Btn, MainContainer, Section } from "@/styles/generalStyled"
import { OverTitle, Paragraph, SubTitle, Title } from "@/styles/textComponents"
import { Box, Button, Card, Grid, Paper, Stack } from "@mui/material"
import Image from "next/image"
import React, { useState } from "react"
import wordpress from '../../images/code.png'
import { EmailOutlined, LinkedIn } from "@mui/icons-material"
import Link from "next/link"


export const Contact = (props) => {




    return (<>
        <Section
        /* bgColor="radial-gradient(rgb(143 143 143 / 50%), rgb(0 0 0 / 22%))" */
        /* sx={{padding: "6.250rem 0"}} */
        >
            <MainContainer justify={'space-between'} alignItemsMobile={'baseline'}>
                <Grid>
                    <Paragraph color={'#fff'} fontSize={'5rem'}>Contact</Paragraph>
                    <Paragraph color={'#fff'}>We can make great things together, send me an email, let's chat!</Paragraph>
                </Grid>
                <Grid sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '.625rem' }}>
                        <EmailOutlined />
                        <Link href={'mailto:dubaizan@gmail.com'} target="blank">
                            <Paragraph color={'#fff'}>dubaizan@gmail.com</Paragraph>
                        </Link>
                    </Grid>
                    <Grid sx={{ display: 'flex', flexDirection: 'row', gap: '.625rem' }}>
                        <LinkedIn />
                        <Link href={'https://www.linkedin.com/in/edu-stadler/'} target="blank">
                            <Paragraph color={'#fff'}>/in/edu-stadler/</Paragraph>
                        </Link>
                    </Grid>
                </Grid>
            </MainContainer>
        </Section>
    </>)
}