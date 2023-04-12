import Experience from "@/components/box"
import { Btn, MainContainer, Section } from "@/styles/generalStyled"
import { OverTitle, Paragraph, SubTitle, Title } from "@/styles/textComponents"
import { Box, Button, Card, Grid, Paper, Stack } from "@mui/material"
import { Canvas } from "@react-three/fiber"



export const FirstSection = (props) => {




    return (<>
        <Section
            height="100vh"
            /* bgColor="radial-gradient(rgb(143 143 143 / 50%), rgb(0 0 0 / 22%))" */
        >
            <MainContainer sx={{gap: "2.5rem"}}>
                <Grid item md={5} sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <OverTitle>{props.overTitle}</OverTitle>
                    <Title fontSize={'3.75rem'} color="#f6f6f6">{props.name}</Title>
                    <Paragraph color="#f2f2f2">{props.subtitle}</Paragraph>
                    <Button sx={{width: '40%', margin: '.9375rem 0'}} variant="contained">Get in touch!</Button>
                </Grid>
                <Grid item md={5}>
                    <Canvas shadows id={'root'}>
                        <Experience/>
                    </Canvas>
                </Grid>
            </MainContainer>
        </Section>
    </>)
}