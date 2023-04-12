import CardImage from "@/components/CardImage"
import Weather from "@/components/Weather"
import { Btn, FlexWrap, MainContainer, Section } from "@/styles/generalStyled"
import { OverTitle, Paragraph, SubTitle, Title } from "@/styles/textComponents"
import { Box, Button, Card, Grid, Paper, Stack } from "@mui/material"
import Image from "next/image"
import { useState } from "react"
import Figma from '../../images/figma.svg'
import Git from '../../images/git.svg'
import Graphql from '../../images/graphql.svg'
import Html from '../../images/html.svg'
import Javascript from '../../images/javascript.svg'
import Mui from '../../images/mui.svg'
import Next from '../../images/next.svg'
import ReactLogo from '../../images/react.svg'
import Sass from '../../images/sass.svg'
import Wordpress from '../../images/wordpress.svg'


export const ThirdSection = (props) => {

    const Logos = [
        {
            url: Figma
        },
        {
            url: Git
        },
        {
            url: Graphql
        },
        {
            url: Html
        },
        {
            url: Javascript
        },
        {
            url: Mui
        },
        {
            url: Next
        },
        {
            url: ReactLogo
        },
        {
            url: Sass
        },
        {
            url: Wordpress
        }
    ]





    return (
        <>
            <Section
                height="100vh"
            /* bgColor="radial-gradient(rgb(143 143 143 / 50%), rgb(0 0 0 / 22%))" */
            >
                <MainContainer
                    sx={
                        {
                            gap: "1rem"
                        }
                    }
                >
                    <Grid container md={6} sx={{ justifyContent: "center" }} spacing={2}>
                        <Grid item width={"100%"}>
                            {/* <Weather
                            width="28.125rem"
                            bgColor="#32c8ee"
                            color="#fff"
                            temperature="30ºC"
                        /> */}
                            <FlexWrap>
                                {
                                    Logos.map(
                                        (logo, index) => <CardImage image={logo.url} key={index} />
                                    )
                                }

                            </FlexWrap>
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        md={6}
                        sx={
                            {
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center"
                            }
                        }>
                        <OverTitle>{props.overTitle}</OverTitle>
                        <Title color="#f6f6f6">{props.name}</Title>
                        <Paragraph color="#f2f2f2">{props.subtitle}</Paragraph>
                    </Grid>
                </MainContainer>
            </Section>
        </>)
}