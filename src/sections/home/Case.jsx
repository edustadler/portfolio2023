import CaseBox from "@/components/CaseBox";
import CaseHeader from "@/components/CaseHeader";
import { FlexWrap, MainContainer, Section } from "@/styles/generalStyled"
import { Paragraph, SpanText, Title } from "@/styles/textComponents"
import { Grid } from "@mui/material";
import Marquee from "react-fast-marquee";
import Agora from '../../images/agorasite.png'
import OpaBier from '../../images/opasite.png'
import Audiency from '../../images/audiency.png'
import Digix from '../../images/digixsite.png'
import Lemonadde from '../../images/lemonaddesite.png'
import EduStadler from '../../images/edustadlersite.png'
import ChatAI from "@/components/ChatAI";


const Cases = [
    {
        url: Agora,
        title: 'Ágora TechPark'
    },
    {
        url: OpaBier,
        title: 'OpaBier'
    },
    {
        url: Audiency,
        title: 'Audiency.io'
    },
    {
        url: Digix,
        title: 'Digix'
    },
    {
        url: Lemonadde,
        title: 'Lemonadde'
    },
    {
        url: EduStadler,
        title: 'My porfólio 2021'
    }
]



export default function Case() {

    return (<>
        <CaseHeader fontSize={'8.375rem'} title={'CASE'} />
        <Section padding={'8.25rem 0'} height={'100%'}>
            <MainContainer sx={{ gap: '2.625rem', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                {
                    Cases.map(
                        (cases, index) => <CaseBox title={cases.title} src={cases.url} key={index} />
                    )
                }

            </MainContainer>
        </Section>
    </>)
}
