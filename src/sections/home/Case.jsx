import React from "react";
import CaseBox from "@/components/CaseBox";
import CaseHeader from "@/components/CaseHeader";
import { MainContainer, Section } from "@/styles/generalStyled"




export default function Case() {


    return (<>
        <CaseHeader fontSize={'6.375rem'} title={'CASE'} />
        <Section padding={'12.25rem 0'} paddingMobile={'12.25rem 0 1rem 0'} height={'100%'} bgColor='#000'>
            <MainContainer sx={{ gap: '2.625rem', flexWrap: 'wrap', justifyContent: 'space-evenly' }} maxWidth={'100rem'}>
                <CaseBox backgroundColor={'transparent'} />
            </MainContainer>
        </Section>
    </>)
}
