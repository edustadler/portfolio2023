import React, { useEffect, useRef, useState } from "react";
import { ContentWrap, FlexAbove } from "@/styles/generalStyled";
import { Paragraph, SubTitle } from "@/styles/textComponents";
import { Box, Card, Chip, Grid, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import Agora from '../images/agorasite.png'
import OpaBier from '../images/opasite.png'
import Audiency from '../images/audiency.png'
import Digix from '../images/digixsite.png'
import Lemonadde from '../images/lemonaddesite.png'
import EduStadler from '../images/edustadlersite.png'
import Nextjs from '../images/next.png'
import V9 from "./V9";
import V7 from "./V7";
import V6 from "./V6";
import V8 from "./V8";
import V2 from "./V2";
import V1 from "./V1";
import V3 from "./V3";
import { Frame } from "./frame";


const Cases = [
    {
        url: Nextjs,
        title: 'Dados pela saúde (data for health)',
        content: 'Lorem ipsum',
        company1: 'Kumulus',
        company3: 'Hospital Albert Einstein',
        tecnology1: 'next.js',
        tecnology2: 'Wordpress',
        tecnology3: 'css-in-js',
        class: 'einstein'
    },
    {
        url: Agora,
        title: 'Ágora TechPark',
        content: 'Lorem ipsum',
        company1: 'Labbo',
        tecnology1: 'Php',
        tecnology2: 'Wordpress',
        class: 'agora'
    },
    {
        url: OpaBier,
        title: 'OpaBier',
        content: 'Lorem ipsum',
        company1: 'Labbo',
        tecnology1: 'Php',
        tecnology2: 'Wordpress',
        class: 'opa'
    },
    {
        url: Digix,
        title: 'Digix',
        content: 'Lorem ipsum',
        company1: 'Labbo',
        tecnology1: 'Php',
        tecnology2: 'Wordpress',
        class: 'digix'
    },
    {
        url: Audiency,
        title: 'Audiency.io',
        content: 'Lorem ipsum',
        company1: 'Audiency.io',
        tecnology1: 'next.js',
        tecnology2: 'react.js',
        tecnology3: 'css-in-js',
        class: 'audiency'
    },
    {
        url: Lemonadde,
        title: 'Lemonadde',
        content: 'Lorem ipsum',
        company1: "abstrato",
        tecnology1: 'Php',
        tecnology2: 'Wordpress',
        tenology3: 'Gsap',
        class: 'lemonadde'
    },

]



export default function CaseBox(props) {
    const { title, src, backgroundColor } = props

    let [visible, setVisible] = useState()
    let [isMobile, setIsMobile] = useState(false);

    let Trigger = useRef()

    useEffect(() => {
        const items = document.querySelectorAll('.item');
        const items2 = document.querySelectorAll('.item-2');
        const items3 = document.querySelectorAll('.item-3');
        const items4 = document.querySelectorAll('.item-4');
        const items6 = document.querySelectorAll('.item-6');

        gsap.set('.image-reveal', { opacity: 0, x: -30, zIndex: 0 });
        gsap.set('.image-reveal-2', { opacity: 0, x: -30, zIndex: -1 });
        gsap.set('.image-reveal-3', { opacity: 0, x: -30, zIndex: -1 });
        gsap.set('.image-reveal-4', { opacity: 0, x: -30, zIndex: -1 });
        gsap.set('.image-reveal-6', { opacity: 0, x: -30, zIndex: -1 });

        items.forEach((el) => {

            el.addEventListener('mouseenter', (e) => {
                gsap.to('.image-reveal', { opacity: 1, x: 10, zIndex: 99, ease: 'power1.in', });
            });

            el.addEventListener('mouseleave', (e) => {
                gsap.to('.image-reveal', { x: -20, opacity: 0 });
            });

            el.addEventListener('mousemove', (e) => {
                gsap.set('.image-reveal', { x: 0 });
            });
        });

        items2.forEach((el2) => {

            el2.addEventListener('mouseenter', (e) => {
                gsap.to('.image-reveal-2', { opacity: 1, x: 10, zIndex: 99, ease: 'power1.in', });
            });

            el2.addEventListener('mouseleave', (e) => {
                gsap.to('.image-reveal-2', { x: -20, opacity: 0 });
            });

            el2.addEventListener('mousemove', (e) => {
                gsap.set('.image-reveal-2', { x: 0 });
            });

        });

        items3.forEach((el3) => {

            el3.addEventListener('mouseenter', (e) => {
                gsap.to('.image-reveal-3', { opacity: 1, x: 10, zIndex: 99, ease: 'power1.in', });
            });

            el3.addEventListener('mouseleave', (e) => {
                gsap.to('.image-reveal-3', { x: -20, opacity: 0 });
            });

            el3.addEventListener('mousemove', (e) => {
                gsap.set('.image-reveal-3', { x: 0 });
            });

        });

        items4.forEach((el4) => {

            el4.addEventListener('mouseenter', (e) => {
                gsap.to('.image-reveal-4', { opacity: 1, x: 10, zIndex: 99, ease: 'power1.in', });
            });

            el4.addEventListener('mouseleave', (e) => {
                gsap.to('.image-reveal-4', { x: -20, opacity: 0 });
            });

            el4.addEventListener('mousemove', (e) => {
                gsap.set('.image-reveal-4', { x: 0 });
            });

        });

       

        items6.forEach((el6) => {

            el6.addEventListener('mouseenter', (e) => {
                gsap.to('.image-reveal-6', { opacity: 1, x: 10, zIndex: 99, ease: 'power1.in', });
            });

            el6.addEventListener('mouseleave', (e) => {
                gsap.to('.image-reveal-6', { x: -20, opacity: 0 });
            });

            el6.addEventListener('mousemove', (e) => {
                gsap.set('.image-reveal-6', { x: 0 });
            });

        });

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 1080);
        };

        // Add event listener for window resize
        window.addEventListener("resize", handleResize);

        // Call the handleResize function once on mount to set the initial value
        handleResize();

        let observer = new IntersectionObserver((entries) => {
            let entry = entries[0]
            setVisible(entry.isIntersecting)
        })
        observer.observe(Trigger.current)

        // Clean up event listeners when the component unmounts
        return () => {
            items.forEach((el) => {
                el.removeEventListener('mouseenter', () => { });
                el.removeEventListener('mouseleave', () => { });
                el.removeEventListener('mousemove', () => { });
            });
            items2.forEach((el2) => {
                el2.removeEventListener('mouseenter', () => { });
                el2.removeEventListener('mouseleave', () => { });
                el2.removeEventListener('mousemove', () => { });
            });
            items3.forEach((el3) => {
                el3.removeEventListener('mouseenter', () => { });
                el3.removeEventListener('mouseleave', () => { });
                el3.removeEventListener('mousemove', () => { });
            });
            items4.forEach((el4) => {
                el4.removeEventListener('mouseenter', () => { });
                el4.removeEventListener('mouseleave', () => { });
                el4.removeEventListener('mousemove', () => { });
            });
            items6.forEach((el6) => {
                el6.removeEventListener('mouseenter', () => { });
                el6.removeEventListener('mouseleave', () => { });
                el6.removeEventListener('mousemove', () => { });
            });
            window.removeEventListener("resize", handleResize);
        };
    }, []);






    return (<>

        <Grid container rowSpacing={1} ref={Trigger}>

            <Grid item md={6} style={{ alignItems: 'center', display: 'flex', width: `${isMobile ? '100%' : 'initial'}` }}>
                <Link href='javascript:void(0)' style={{ width: `${isMobile ? '100%' : '80%'}` }}>
                    <Card width={30} sx={{ padding: '.9375rem 1rem', boxShadow: 3, display: 'flex', flexDirection: `${isMobile ? 'column' : 'row'}`, alignItems: 'center', justifyContent: 'space-between', width: '100%', /* height: '4.5rem', */ backgroundColor: `${props.backgroundColor ? props.backgroundColor : '#ebefff0'}`, borderRadius: '0', boxShadow: 'none', margin: `${props.margin}`, borderTop: '0.5px solid #666', borderBottom: '0.5px solid #666' }} className="item">
                        <SubTitle fontSize={'1.2rem'} sx={{ width: `${isMobile ? '90%' : '30%'}`, textAlign: `${isMobile ? 'center' : 'initial'}` }}>Dados pela saúde (data for health)</SubTitle>
                        <ContentWrap>
                            <ContentWrap sx={{ marginBottom: '1rem', flexDirection: `${isMobile ? 'column' : 'row'}`, gap: '.625rem', display: 'flex', width: `${isMobile ? '100%' : '25rem'}`, alignItems: 'center', justifyContent: 'space-between' }}>
                                <Paragraph>Technologies:</Paragraph>
                                <ContentWrap sx={{ display: 'flex', alignItems: 'center', alignItems: 'center', justifyContent: 'space-between', gap: '.625rem' }}>
                                    <Chip label={'next.js'} variant="outlined" style={{ color: '#fff' }} />
                                    <Chip label={'Wordpress'} variant="outlined" style={{ color: '#fff' }} />
                                    <Chip label={'css-in-js'} variant="outlined" style={{ color: '#fff' }} />
                                </ContentWrap>
                            </ContentWrap>
                            <ContentWrap sx={{ flexDirection: 'row', gap: '.625rem', display: 'flex', flexDirection: `${isMobile ? 'column' : 'row'}`, alignItems: 'center', justifyContent: 'space-between', width: `${isMobile ? '100%' : '25rem'}` }}>
                                <Paragraph>worked with:</Paragraph>
                                <ContentWrap sx={{ display: 'flex', alignItems: 'center', alignItems: 'center', justifyContent: 'space-between', gap: '.625rem' }}>
                                    <Chip label={'Kumulus'} variant="outlined" style={{ color: '#fff' }} />
                                    <Chip label={'Hospital Albert Einstein'} variant="outlined" style={{ color: '#fff' }} />
                                </ContentWrap>
                            </ContentWrap>
                        </ContentWrap>

                    </Card>

                </Link>
            </Grid>
            <Grid item md={6} style={{ alignItems: 'center', display: 'flex', position: 'relative' }}>
                <Image
                    alt={'project-1'}
                    src={Nextjs}
                    quality={100}
                    style={{ width: '70%', height: 'auto', position: 'absolute', opacity: '0', zIndex: '0' }}
                    className={`image-reveal`}
                />
            </Grid>

            <Grid item md={6} style={{ alignItems: 'center', display: 'flex', width: `${isMobile ? '100%' : 'initial'}` }}>
                <Link href='https://agoratechpark.com.br/' target="blank" style={{ width: `${isMobile ? '100%' : '80%'}` }}>
                    <Card width={30} sx={{ padding: '.9375rem 1rem', flexDirection: `${isMobile ? 'column' : 'row'}`, boxShadow: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', /* height: '4.5rem', */ backgroundColor: `${props.backgroundColor ? props.backgroundColor : '#ebefff0'}`, borderRadius: '0', boxShadow: 'none', margin: `${props.margin}`, borderTop: '0.5px solid #666', borderBottom: '0.5px solid #666' }} className="item-2">
                        <SubTitle fontSize={'1.2rem'} sx={{ width: `${isMobile ? '90%' : '30%'}`, textAlign: `${isMobile ? 'center' : 'initial'}` }}>Ágora TechPark</SubTitle>
                        <ContentWrap>
                            <ContentWrap sx={{ marginBottom: '1rem', flexDirection: `${isMobile ? 'column' : 'row'}`, gap: '.625rem', display: 'flex', width: `${isMobile ? '100%' : '25rem'}`, alignItems: 'center', justifyContent: 'space-between' }}>
                                <Paragraph>Technologies:</Paragraph>
                                <ContentWrap sx={{ display: 'flex', alignItems: 'center', alignItems: 'center', justifyContent: 'space-between', gap: '.625rem' }}>
                                    <Chip label={'php'} variant="outlined" style={{ color: '#fff' }} />
                                    <Chip label={'Wordpress'} variant="outlined" style={{ color: '#fff' }} />
                                </ContentWrap>
                            </ContentWrap>
                            <ContentWrap sx={{ flexDirection: 'row', gap: '.625rem', display: 'flex', flexDirection: `${isMobile ? 'column' : 'row'}`, alignItems: 'center', justifyContent: 'space-between', width: `${isMobile ? '100%' : '25rem'}` }}>
                                <Paragraph>worked with:</Paragraph>
                                <ContentWrap sx={{ display: 'flex', alignItems: 'center', alignItems: 'center', justifyContent: 'space-between', gap: '.625rem' }}>
                                    <Chip label={'Labbo'} variant="outlined" style={{ color: '#fff' }} />
                                </ContentWrap>
                            </ContentWrap>
                        </ContentWrap>

                    </Card>

                </Link>
            </Grid>
            <Grid item md={6} style={{ alignItems: 'center', display: 'flex', position: 'relative' }}>
                <Image
                    alt={'project-2'}
                    src={Agora}
                    quality={100}
                    style={{ width: '70%', height: 'auto', position: 'absolute', opacity: '0', zIndex: '0' }}
                    className={`image-reveal-2`}
                />
            </Grid>

            <Grid item md={6} style={{ alignItems: 'center', display: 'flex', width: `${isMobile ? '100%' : 'initial'}` }}>
                <Link href='https://opabier.com.br/' target="blank" style={{ width: `${isMobile ? '100%' : '80%'}` }}>
                    <Card width={30} sx={{ padding: '.9375rem 1rem', boxShadow: 3, display: 'flex', flexDirection: `${isMobile ? 'column' : 'row'}`, alignItems: 'center', justifyContent: 'space-between', width: '100%', /* height: '4.5rem', */ backgroundColor: `${props.backgroundColor ? props.backgroundColor : '#ebefff0'}`, borderRadius: '0', boxShadow: 'none', margin: `${props.margin}`, borderTop: '0.5px solid #666', borderBottom: '0.5px solid #666' }} className="item-3">
                        <SubTitle fontSize={'1.2rem'} sx={{ width: `${isMobile ? '90%' : '30%'}`, textAlign: `${isMobile ? 'center' : 'initial'}` }}>OpaBier</SubTitle>
                        <ContentWrap>
                            <ContentWrap sx={{ marginBottom: '1rem', flexDirection: `${isMobile ? 'column' : 'row'}`, gap: '.625rem', display: 'flex', width: `${isMobile ? '100%' : '25rem'}`, alignItems: 'center', justifyContent: 'space-between' }}>
                                <Paragraph>Technologies:</Paragraph>
                                <ContentWrap sx={{ display: 'flex', alignItems: 'center', alignItems: 'center', justifyContent: 'space-between', gap: '.625rem' }}>
                                    <Chip label={'Php'} variant="outlined" style={{ color: '#fff' }} />
                                    <Chip label={'Wordpress'} variant="outlined" style={{ color: '#fff' }} />
                                </ContentWrap>
                            </ContentWrap>
                            <ContentWrap sx={{ flexDirection: 'row', gap: '.625rem', display: 'flex', flexDirection: `${isMobile ? 'column' : 'row'}`, justifyContent: 'space-between', width: `${isMobile ? '100%' : '25rem'}`, alignItems: 'center' }}>
                                <Paragraph>worked with:</Paragraph>
                                <ContentWrap sx={{ display: 'flex', alignItems: 'center', alignItems: 'center', justifyContent: 'space-between', gap: '.625rem' }}>
                                    <Chip label={'Labbo'} variant="outlined" style={{ color: '#fff' }} />
                                </ContentWrap>
                            </ContentWrap>
                        </ContentWrap>

                    </Card>

                </Link>
            </Grid>
            <Grid item md={6} style={{ alignItems: 'center', display: 'flex', position: 'relative' }}>
                {
                    visible === true
                        ?
                        isMobile === false
                            ?
                            <Frame />
                            :
                            null
                        :
                        null
                }
                <Image
                    alt={'project-3'}
                    src={OpaBier}
                    quality={100}
                    style={{ width: '70%', height: 'auto', position: 'absolute', opacity: '0', zIndex: '0' }}
                    className={`image-reveal-3`}
                />
            </Grid>

            <Grid item md={6} style={{ alignItems: 'center', display: 'flex', width: `${isMobile ? '100%' : 'initial'}` }}>
                <Link href='https://digix.com.br/' target="blank" style={{ width: `${isMobile ? '100%' : '80%'}` }}>
                    <Card width={30} sx={{ padding: '.9375rem 1rem', boxShadow: 3, display: 'flex', flexDirection: `${isMobile ? 'column' : 'row'}`, alignItems: 'center', justifyContent: 'space-between', width: '100%', /* height: '4.5rem', */ backgroundColor: `${props.backgroundColor ? props.backgroundColor : '#ebefff0'}`, borderRadius: '0', boxShadow: 'none', margin: `${props.margin}`, borderTop: '0.5px solid #666', borderBottom: '0.5px solid #666' }} className="item-4">
                        <SubTitle fontSize={'1.2rem'} sx={{ width: `${isMobile ? '90%' : '30%'}`, textAlign: `${isMobile ? 'center' : 'initial'}` }}>Digix</SubTitle>
                        <ContentWrap>
                            <ContentWrap sx={{ marginBottom: '1rem', flexDirection: `${isMobile ? 'column' : 'row'}`, gap: '.625rem', display: 'flex', width: `${isMobile ? '100%' : '25rem'}`, alignItems: 'center', justifyContent: 'space-between' }}>
                                <Paragraph>Technologies:</Paragraph>
                                <ContentWrap sx={{ display: 'flex', alignItems: 'center', alignItems: 'center', justifyContent: 'space-between', gap: '.625rem' }}>
                                    <Chip label={'Php'} variant="outlined" style={{ color: '#fff' }} />
                                    <Chip label={'Wordpress'} variant="outlined" style={{ color: '#fff' }} />
                                </ContentWrap>
                            </ContentWrap>
                            <ContentWrap sx={{ flexDirection: 'row', gap: '.625rem', display: 'flex', flexDirection: `${isMobile ? 'column' : 'row'}`, alignItems: 'center', justifyContent: 'space-between', width: `${isMobile ? '100%' : '25rem'}` }}>
                                <Paragraph>worked with:</Paragraph>
                                <ContentWrap sx={{ display: 'flex', alignItems: 'center', alignItems: 'center', justifyContent: 'space-between', gap: '.625rem' }}>
                                    <Chip label={'Labbo'} variant="outlined" style={{ color: '#fff' }} />
                                </ContentWrap>
                            </ContentWrap>
                        </ContentWrap>

                    </Card>

                </Link>
            </Grid>
            <Grid item md={6} style={{ alignItems: 'center', display: 'flex', position: 'relative' }}>
                <Image
                    alt={'project-4'}
                    src={Digix}
                    quality={100}
                    style={{ width: '70%', height: 'auto', position: 'absolute', opacity: '0', zIndex: '0' }}
                    className={`image-reveal-4`}
                />
            </Grid>

            

            <Grid item md={6} style={{ alignItems: 'center', display: 'flex', width: `${isMobile ? '100%' : 'initial'}` }}>
                <Link href='https://lemonadde.com.br/' target="blank" style={{ width: `${isMobile ? '100%' : '80%'}` }}>
                    <Card width={30} sx={{ padding: '.9375rem 1rem', boxShadow: 3, display: 'flex', flexDirection: `${isMobile ? 'column' : 'row'}`, alignItems: 'center', justifyContent: 'space-between', width: '100%', /* height: '4.5rem', */ backgroundColor: `${props.backgroundColor ? props.backgroundColor : '#ebefff0'}`, borderRadius: '0', boxShadow: 'none', margin: `${props.margin}`, borderTop: '0.5px solid #666', borderBottom: '0.5px solid #666' }} className="item-6">
                        <SubTitle fontSize={'1.2rem'} sx={{ width: `${isMobile ? '90%' : '30%'}`, textAlign: `${isMobile ? 'center' : 'initial'}` }}>Lemonadde</SubTitle>
                        <ContentWrap>
                            <ContentWrap sx={{ marginBottom: '1rem', flexDirection: `${isMobile ? 'column' : 'row'}`, gap: '.625rem', display: 'flex', width: `${isMobile ? '100%' : '25rem'}`, alignItems: 'center', justifyContent: 'space-between' }}>
                                <Paragraph>Technologies:</Paragraph>
                                <ContentWrap sx={{ display: 'flex', alignItems: 'center', alignItems: 'center', justifyContent: 'space-between', gap: '.625rem' }}>
                                    <Chip label={'Gsap'} variant="outlined" style={{ color: '#fff' }} />
                                    <Chip label={'Wordpress'} variant="outlined" style={{ color: '#fff' }} />
                                </ContentWrap>
                            </ContentWrap>
                            <ContentWrap sx={{ flexDirection: 'row', gap: '.625rem', display: 'flex', alignItems: 'center', flexDirection: `${isMobile ? 'column' : 'row'}`, justifyContent: 'space-between', width: `${isMobile ? '100%' : '25rem'}` }}>
                                <Paragraph>worked with:</Paragraph>
                                <ContentWrap sx={{ display: 'flex', alignItems: 'center', alignItems: 'center', justifyContent: 'space-between', gap: '.625rem' }}>
                                    <Chip label={'abstrato'} variant="outlined" style={{ color: '#fff' }} />
                                </ContentWrap>
                            </ContentWrap>
                        </ContentWrap>

                    </Card>

                </Link>
            </Grid>
            <Grid item md={6} style={{ alignItems: 'center', display: 'flex', position: 'relative' }}>
                <Image
                    alt={'project-6'}
                    src={Lemonadde}
                    quality={100}
                    style={{ width: '70%', height: 'auto', position: 'absolute', opacity: '0', zIndex: '0' }}
                    className={`image-reveal-6`}
                />
            </Grid>

        </Grid>
    </>)
}