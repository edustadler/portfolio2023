import React from "react";
import { ContentWrap } from "@/styles/generalStyled";
import { SubTitle, Title } from "@/styles/textComponents";
import { Card } from "@mui/material";
import Image from "next/image";

export default function CardImage(props) {
    return (<>
        <Card width={30} sx={{ padding: '.9375rem', boxShadow: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '5.5rem', backgroundColor: `${props.backgroundColor ? props.backgroundColor : '#ebefff0'}`, borderRadius: '0', boxShadow: 'none', margin: `${props.margin}`, borderTop: '0.5px solid #666', borderBottom: '0.5px solid #666' }} className="card-tec">
            <ContentWrap>
                <SubTitle fontSize={'1.4rem'}>{props.name}</SubTitle>
            </ContentWrap>
            <Image
                alt={props.alt}
                src={props.image}
                width={100}
                style={{ position: 'relative', height: '70%' }}
            />
        </Card>
    </>)
}