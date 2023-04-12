import { FlexAbove } from "@/styles/generalStyled";
import { SubTitle } from "@/styles/textComponents";
import { Box, Paper } from "@mui/material";
import Image from "next/image";
import Link from "next/link";


export default function CaseBox(props) {
    const { title, src } = props

    return (<>

        <Paper
            elevation={18}
            sx={
                {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'end',
                    background: 'transparent',
                    border: 'solid 1px #545454',
                    overflow: 'hidden',
                    padding: '.9375rem',
                    width: '48%',
                    height: '18.75rem',
                    position: 'relative',
                }
            }
        >
            <Link href='#'>
                <Box sx={{ width: '100%', height: '100%', position: 'absolute', background: '#102cab', top: '0', left: '0', opacity: 1, zIndex: 99 }} />
                <Image
                    src={src}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
                <Box sx={{ width: '100%', overflowWrap: 'break-word', zIndex: '3', position: 'relative' }}>
                    <SubTitle>{title}</SubTitle>
                </Box>
            </Link>
        </Paper>
    </>)
}