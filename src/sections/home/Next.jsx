import React, { useState, useRef, useEffect } from "react"
import CardImage from "@/components/CardImage"
import Weather from "@/components/Weather"
import { Btn, FlexWrap, LetterWrap, MainContainer, Section } from "@/styles/generalStyled"
import { OverTitle, Paragraph, SubTitle, Title } from "@/styles/textComponents"
import { Box, Button, Card, Grid, Paper, Stack } from "@mui/material"
import Image from "next/image"
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
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger);

export const ThirdSection = (props) => {

    let title = 'Technologies'

    const triggerRef = useRef(null)
    const letterRef = useRef(null)
    const cardRef = useRef(null)


    useEffect(() => {
        const isMobile = window.innerWidth <= 767;
        let revealSet = gsap.set('.title-tech', {
            y: 290,
            opacity: 0,

        })
        let reveal = gsap.to(
            '.title-tech', {
            y: 0,
            opacity: 1,
            duration: isMobile ? 3 : 5,
            ease: 'power4.in',
            color: '#fff',
            stagger: {
                each: isMobile ? .3 : .1,
            },
            scrollTrigger: {
                trigger: '.start-tech',
                scrub: true,
                start: 'top 100%',
                end: isMobile ? 'top 30%' : 'bottom 100%',
                markers: false
            }
        }
        )
        return () => {
            reveal.kill()
        }
    }, [])

    useEffect(() => {
        const isMobile = window.innerWidth <= 767;
        let cardRevealSet = gsap.set('.card-reveal div', {
            y: 290,
            opacity: 0,

        })
        let cardReveal = gsap.to(
            '.card-reveal div', {
            y: 0,
            opacity: 1,
            duration: isMobile ? 99 : 80,
            ease: 'power4.in',
            color: '#fff',
            stagger: {
                each: isMobile ? 8 : 6,
                from: "center",
                grid: "auto",
            },
            scrollTrigger: {
                trigger: isMobile ? '.padding-control' : '.start-tech',
                scrub: true,
                start: 'top 100%',
                end: isMobile ? 'top 20%' : 'top 30%',
                markers: false
            }
        }
        )
        return () => {
            cardReveal.kill()
        }
    }, [])

    const Logos = [
        {
            name: 'Figma',
            url: Figma
        },
        {
            name: 'Git',
            url: Git
        },
        {
            name: 'Html',
            url: Html
        },
        {
            name: 'Mui',
            url: Mui
        },
        {
            name: 'Next',
            url: Next
        },
        {
            name: 'React',
            url: ReactLogo
        },
        {
            name: 'Sass',
            url: Sass
        },
        {
            name: 'Wordpress',
            url: Wordpress
        }
    ]





    return (
        <>
            <Section
                bgColor="#000"
                paddingMobile="2.785rem 0"
            >
                <MainContainer
                    className={'start-tech'}
                    sx={
                        {
                            gap: "1rem",
                            display: 'block'
                        }
                    }
                    maxWidth={'100rem'}
                >
                    <Grid container>

                        <Grid
                            item
                            md={6}
                            sx={
                                {
                                    display: "flex",
                                    flexWrap: 'wrap',
                                    flexDirection: 'row',
                                    justifyContent: "left",
                                    alignItem: 'center',
                                }
                            }
                            className="padding-control">
                            <OverTitle>{props.overTitle}</OverTitle>
                            {/* <Title
                                width={'29.5rem'}
                                height={'auto'}
                                fontSize={'11.5rem'}
                                letterSpacing={'-0.8rem'}
                                lineHeight={'9rem'}
                                wordBreak={'break-word'}>{props.name}</Title> */}

                            {title.split('').map((word, index) => (
                                word === ' '
                                    ?
                                    <LetterWrap sx={{ clipPath: 'polygon(0 0, 130% 0, 130% 130%, 0% 130%)' }}>
                                        <Title
                                            width={'29.5rem'}
                                            height={'auto'}
                                            fontSize={'11.5rem'}
                                            letterSpacing={'-0.8rem'}
                                            lineHeight={'9rem'}
                                            wordBreak={'break-word'}
                                            key={index}
                                            className="title-tech"
                                            sx={{ width: 'auto' }}
                                        >
                                            &nbsp;
                                        </Title>
                                    </LetterWrap>
                                    :
                                    <LetterWrap sx={{ clipPath: 'polygon(0 0, 100% 0, 130% 130%, 0% 130%)' }}>
                                        <Title
                                            width={'29.5rem'}
                                            height={'auto'}
                                            fontSize={'11.5rem'}
                                            mobileFontSize={'9.5rem'}
                                            letterSpacing={'-0.8rem'}
                                            lineHeight={'9rem'}
                                            wordBreak={'break-word'}
                                            key={index}
                                            className="title-tech"
                                            ref={letterRef}
                                            sx={{ width: 'auto' }}
                                        >{word}</Title>
                                    </LetterWrap>
                            ))}

                            <Paragraph textAlign={'left'}>{props.subtitle}</Paragraph>
                        </Grid>
                        <Grid item md={6} sx={{ justifyContent: "center", alignItem: 'center', display: 'flex' }} spacing={2} width={"100%"}>
                            <FlexWrap style={{ justifyContent: 'center' }} className='card-reveal' ref={cardRef} marginTopMobile="1.785rem">
                                {
                                    Logos.map(
                                        (logo, index) => <CardImage alt={logo.name} name={logo.name} image={logo.url} key={index} backgroundColor={'transparent'} />
                                    )
                                }
                            </FlexWrap>
                        </Grid>
                    </Grid>

                </MainContainer>
            </Section>
        </>
    )
}