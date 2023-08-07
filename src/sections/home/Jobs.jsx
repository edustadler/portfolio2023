import React from "react";
import CardImage from "@/components/CardImage";
import { MainContainer, Section } from "@/styles/generalStyled";
import { SubTitle } from "@/styles/textComponents";
import { Box } from "@mui/material";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import Abstrato from '../../images/abstrato.png'
import Einstein from '../../images/einstein.png'
import Kumulus from '../../images/kumulus.png'
import Labbo from '../../images/labbo.png'
import Logicalis from '../../images/logicalis.png'
import Vivo from '../../images/vivo.png'
import { Contact } from "./Contact";


export default function Jobs() {


    const Logos = [
        {
            url: Abstrato
        },
        {
            url: Einstein
        },
        {
            url: Kumulus
        },
        {
            url: Labbo
        },
        {
            url: Logicalis
        },
        {
            url: Vivo
        }
    ]

    return (<>
        <Section>
            <MainContainer justify="center" sx={{ marginBottom: '6.25rem' }}>
                <SubTitle>Already worked</SubTitle>
            </MainContainer>
            <Marquee speed={300} gradient={false} pauseOnHover={false}/*  style={{display: 'flex', gap: '50px'}} */>
                {
                    Logos.map(
                        (logo, index) =>
                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 2.075rem' }} key={index}>
                                <Image loading="lazy" src={logo.url} width={150} style={{ position: 'relative', width: '100%', height: '110px', objectFit: 'none' }} quality={100} />
                            </Box>
                    )
                }
            </Marquee>
            <Marquee speed={300} gradient={false} direction={'right'} pauseOnHover={false} style={{ display: 'flex', gap: '50px' }}>
                {
                    Logos.map(
                        (logo, index) =>
                            <Box key={index} sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '0 2.075rem' }}>
                                <Image loading="lazy" src={logo.url} width={150} style={{ position: 'relative', width: '100%', height: '110px', objectFit: 'none' }} quality={100} />
                            </Box>
                    )
                }
            </Marquee>
        </Section>
        <Contact />
    </>)
}