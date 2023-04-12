import { Card } from "@mui/material";
import Image from "next/image";

export default function CardImage(props) {
    return (<>
        <Card width={30} sx={{padding: '.9375rem', boxShadow: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', width: '7.5rem', height: '7.5rem', backgroundColor: `${props.backgroundColor ? props.backgroundColor : '#ebefff'}`, boxShadow: 5, margin: `${props.margin}`}}>
            <Image
                src={props.image}
                width={100}
                style={{position: 'relative', width: '80%'}}
            />
        </Card>
    </>)
}