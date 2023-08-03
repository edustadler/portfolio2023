import React from "react";
import { ContentWrap, MainContainer, Section } from "@/styles/generalStyled"
import { Paragraph, SpanText, Title } from "@/styles/textComponents"
import Marquee from "react-fast-marquee";



export default function CaseHeader(props) {

    

    return (<>
        <Section padding={'9.375rem 0 0 0'}>
            <ContentWrap sx={{ height: '11.825rem' }}>

                <Marquee speed={300} gradient={false} direction={'right'}>
                    <MainContainer sx={{height: '91px', overflowY: 'hidden'}}>
                        <Title lineHeight={'initial'} marginBottom={'0'} color={'#fff'} backgroundImage={'initial'} fontSize={props.fontSize}>{props.title}</Title>
                    </MainContainer>
                    <MainContainer sx={{height: '91px', overflowY: 'hidden'}}>
                        <Title lineHeight={'initial'} marginBottom={'0'} color={'#666666'} fontSize={props.fontSize}>{props.title}</Title>
                    </MainContainer>
                    <MainContainer sx={{height: '91px', overflowY: 'hidden'}}>
                        <Title lineHeight={'initial'} marginBottom={'0'} color={'#fff'} backgroundImage={'initial'} fontSize={props.fontSize}>{props.title}</Title>
                    </MainContainer>
                    <MainContainer sx={{height: '91px', overflowY: 'hidden'}}>
                        <Title lineHeight={'initial'} marginBottom={'0'} color={'#666666'} fontSize={props.fontSize}>{props.title}</Title>
                    </MainContainer>
                    <MainContainer sx={{height: '91px', overflowY: 'hidden'}}>
                        <Title lineHeight={'initial'} marginBottom={'0'} color={'#fff'} backgroundImage={'initial'} fontSize={props.fontSize}>{props.title}</Title>
                    </MainContainer>
                    <MainContainer sx={{height: '91px', overflowY: 'hidden'}}>
                        <Title lineHeight={'initial'} marginBottom={'0'} color={'#666666'} fontSize={props.fontSize}>{props.title}</Title>
                    </MainContainer>
                </Marquee>
                <Marquee speed={200} gradient={false}>
                    <MainContainer sx={{height: '91px', overflowY: 'hidden'}}>
                        <Title lineHeight={'initial'} marginBottom={'0'} color={'#666666'} fontSize={props.fontSize}>{props.title}</Title>
                    </MainContainer>
                    <MainContainer sx={{height: '91px', overflowY: 'hidden'}}>
                        <Title lineHeight={'initial'} marginBottom={'0'} color={'#fff'} backgroundImage={'initial'} fontSize={props.fontSize}>{props.title}</Title>
                    </MainContainer>
                    <MainContainer sx={{height: '91px', overflowY: 'hidden'}}>
                        <Title lineHeight={'initial'} marginBottom={'0'} color={'#666666'} fontSize={props.fontSize}>{props.title}</Title>
                    </MainContainer>
                    <MainContainer sx={{height: '91px', overflowY: 'hidden'}}>
                        <Title lineHeight={'initial'} marginBottom={'0'} color={'#fff'} backgroundImage={'initial'} fontSize={props.fontSize}>{props.title}</Title>
                    </MainContainer>
                    <MainContainer sx={{height: '91px', overflowY: 'hidden'}}>
                        <Title lineHeight={'initial'} marginBottom={'0'} color={'#666666'} fontSize={props.fontSize}>{props.title}</Title>
                    </MainContainer>
                    <MainContainer sx={{height: '91px', overflowY: 'hidden'}}>
                        <Title lineHeight={'initial'} marginBottom={'0'} color={'#fff'} backgroundImage={'initial'} fontSize={props.fontSize}>{props.title}</Title>
                    </MainContainer>
                </Marquee>
            </ContentWrap>
        </Section>
    </>)
}
