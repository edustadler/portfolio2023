import Weather from "@/components/Weather"
import { MainContainer, Section } from "@/styles/generalStyled"
import { OverTitle, Paragraph, SubTitle, Title } from "@/styles/textComponents"
import { Grid } from "@mui/material"



export const SecondSection = (props) => {




    return (<>
        <Section
            /* bgColor="radial-gradient(rgb(143 143 143 / 50%), rgb(0 0 0 / 22%))" */
            /* sx={{padding: "6.250rem 0"}} */
        >
            <MainContainer sx={{gap: "5rem", alignItems: "start"}}>
                <Grid container md={12} sx={{ display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <OverTitle>{props.overTitle}</OverTitle>
                    <Title color="#f6f6f6" fontSize="3.75rem">{props.name}</Title>
                    <Paragraph color="#f2f2f2" fontSize="3.5rem" lineHeight="3.78rem">{props.subtitle}</Paragraph>
                </Grid>
            </MainContainer>
        </Section>
    </>)
}