import Weather from "@/components/Weather"
import { Btn, MainContainer, Section } from "@/styles/generalStyled"
import { OverTitle, Paragraph, SubTitle, Title } from "@/styles/textComponents"
import { Box, Button, Card, Grid, Paper, Stack } from "@mui/material"
import Image from "next/image"
import { useState } from "react"
import wordpress from '../../images/code.png'


export const Wordpress = (props) => {




    return (<>
        <Section
            /* bgColor="radial-gradient(rgb(143 143 143 / 50%), rgb(0 0 0 / 22%))" */
        /* sx={{padding: "6.250rem 0"}} */
        >
            <MainContainer
                sx={
                    {
                        gap: "1rem",
                    }
                }
            >
                <Grid
                    container
                    md={6}
                    sx={
                        {
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center"
                        }
                    }
                >
                    <OverTitle color="#ff5200">{props.overTitle}</OverTitle>
                    <Title color="#f6f6f6">{props.name}</Title>
                    <Paragraph color="#f2f2f2">{props.subtitle}</Paragraph>
                </Grid>
                <Grid
                    container
                    md={6}
                    sx={
                        {
                            justifyContent: "center"
                        }
                    }
                    spacing={2}
                >
                    <Box sx={
                        {
                            /* width: '50%' */
                            boxShadow: 3
                        }
                    }>
                        <Image src={wordpress} width={450}
                        style={{
                        objectFit: 'cover',
                        }}/>
                    </Box>
                </Grid>
            </MainContainer>
        </Section>
    </>)
}