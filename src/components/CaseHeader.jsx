import { MainContainer, Section } from "@/styles/generalStyled"
import { Paragraph, SpanText, Title } from "@/styles/textComponents"
import Marquee from "react-fast-marquee";



export default function CaseHeader(props) {

    return (<>
        <Section>
            <Marquee speed={300} gradient={false} direction={'right'}>
                <MainContainer>
                    <Title lineHeight={'initial'} marginBottom={0} color={'#fff'} backgroundImage={'initial'} fontSize={props.fontSize}>{props.title}</Title>
                </MainContainer>
                <MainContainer>
                    <Title lineHeight={'initial'} marginBottom={0} color={'#ff5200'} fontSize={props.fontSize}>{props.title}</Title>
                </MainContainer>
                <MainContainer>
                    <Title lineHeight={'initial'} marginBottom={0} color={'#fff'} backgroundImage={'initial'} fontSize={props.fontSize}>{props.title}</Title>
                </MainContainer>
                <MainContainer>
                    <Title lineHeight={'initial'} marginBottom={0} color={'#ff5200'} fontSize={props.fontSize}>{props.title}</Title>
                </MainContainer>
                <MainContainer>
                    <Title lineHeight={'initial'} marginBottom={0} color={'#fff'} backgroundImage={'initial'} fontSize={props.fontSize}>{props.title}</Title>
                </MainContainer>
                <MainContainer>
                    <Title lineHeight={'initial'} marginBottom={0} color={'#ff5200'} fontSize={props.fontSize}>{props.title}</Title>
                </MainContainer>
            </Marquee>
            <Marquee speed={200} gradient={false}>
                <MainContainer>
                    <Title lineHeight={'initial'} marginBottom={0} color={'#ff5200'} fontSize={props.fontSize}>{props.title}</Title>
                </MainContainer>
                <MainContainer>
                    <Title lineHeight={'initial'} marginBottom={0} color={'#fff'} backgroundImage={'initial'} fontSize={props.fontSize}>{props.title}</Title>
                </MainContainer>
                <MainContainer>
                    <Title lineHeight={'initial'} marginBottom={0} color={'#ff5200'} fontSize={props.fontSize}>{props.title}</Title>
                </MainContainer>
                <MainContainer>
                    <Title lineHeight={'initial'} marginBottom={0} color={'#fff'} backgroundImage={'initial'} fontSize={props.fontSize}>{props.title}</Title>
                </MainContainer>
                <MainContainer>
                    <Title lineHeight={'initial'} marginBottom={0} color={'#ff5200'} fontSize={props.fontSize}>{props.title}</Title>
                </MainContainer>
                <MainContainer>
                    <Title lineHeight={'initial'} marginBottom={0} color={'#fff'} backgroundImage={'initial'} fontSize={props.fontSize}>{props.title}</Title>
                </MainContainer>
            </Marquee>
        </Section>
    </>)
}
