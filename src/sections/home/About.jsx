import React, { useEffect, useRef } from 'react'
import { LetterWrap, MainContainer, Section } from "@/styles/generalStyled"
import { OverTitle, Paragraph, SubTitle, Title } from "@/styles/textComponents"
import { Grid } from "@mui/material"
import { gsap } from "gsap"
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

export const SecondSection = (props) => {

    let subtitle = 'I am a Brazilian developer passionate about front-end and user interactions since 2017. I continuously improve my JavaScript skills and WordPress full-stack capabilities. Besides, I explore generative art using JavaScript (p5.js) as a creative hobby, making me a dedicated and innovative professional.'

    const triggerRef = useRef(null)
    const wordRefs = useRef([]) // Ref to store word references

    useEffect(() => {
        let revealSet = gsap.set('.paragraph', {
            opacity: 0,
            y: 80,
        })

        let reveal = gsap.to(wordRefs.current, {
            opacity: 1,
            y: 0,
            duration: 4,
            ease: 'power4.in',
            color: '#fff',
            stagger: {
                each: .5,
            },
            scrollTrigger: {
                trigger: '.start',
                scrub: true,
                start: 'top 100%',
                end: 'bottom 60%',
            },
        })

        return () => {
            reveal.kill()
        }
    }, [])

    // Split the subtitle into words
    const words = subtitle.split(' ');

    return (
        <Section bgColor="#000">
            <MainContainer className={'start'} sx={{ gap: "5rem", alignItems: "start", }} ref={triggerRef}>
                <Grid item md={12} sx={{ display: "flex", flexWrap: 'wrap', justifyContent: "left" }}>
                    <OverTitle sx={{ display: 'none' }}>{props.overTitle}</OverTitle>
                    {words.map((word, index) => (
                        <LetterWrap key={index}>
                            <Paragraph
                                className="paragraph"
                                fontSize="3.5rem"
                                mobileFontSize="2.5rem"
                                lineHeight="3.78rem"
                                ref={(element) => (wordRefs.current[index] = element)} // Store word references in the array
                                opacity={0}
                            >
                                {word}&nbsp;
                            </Paragraph>
                        </LetterWrap>
                    ))}
                </Grid>
            </MainContainer>
        </Section>
    )
}
