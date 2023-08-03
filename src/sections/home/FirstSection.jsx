import React, { useState, useEffect, useRef } from "react"
import { Btn, MainContainer, Section } from "@/styles/generalStyled"
import { OverTitle, Paragraph, SubTitle, Title } from "@/styles/textComponents"
import { Box, Button, Card, Grid, Paper, Stack } from "@mui/material"
import { OrbitControls, PerspectiveCamera } from "@react-three/drei"
import { Power2, gsap } from "gsap"
import { Canvas } from "@react-three/fiber"
import SwipeIcon from '@mui/icons-material/Swipe'
import Experience from "@/components/3d/Experience"



export const FirstSection = (props) => {

    const [rotate, setRotate] = useState(false);
    const iconRef = useRef(null);

    useEffect(() => {
        const icon = iconRef.current;

        gsap.to(icon, {
            x: '120%',
            ease: Power2.easeInOut,
            duration: 1,
            repeat: -1,
            yoyo: true,
        });
    }, []);


    return (<>
        <Section
            height="100vh"
            bgColor="#000"
            sx={{position: 'relative'}}
        >
            <Canvas camera={{ position: [2.5, 2.5, 2.5] }} id="root">
                <ambientLight intensity={0.2} />
                <Experience count={4000} />
                <OrbitControls enableZoom={false} enableRotate={true} />
            </Canvas>
            <MainContainer sx={{ gap: "2.5rem" }}>
                <Grid item md={5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <OverTitle sx={{ zIndex: 999 }}>{props.overTitle}</OverTitle>
                    <Title fontSize={'4.75rem'} color="#d3d3d3" sx={{ zIndex: 999 }}>{props.name}</Title>
                    <Paragraph sx={{ zIndex: 999 }}>{props.subtitle}</Paragraph>
                </Grid>
                <SwipeIcon sx={{ position: 'absolute', right: "10%", bottom: '7%' }} ref={iconRef} />
            </MainContainer>
        </Section>
    </>)
}