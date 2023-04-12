import { SubTitle, Title } from "@/styles/textComponents";
import { WbSunny } from "@mui/icons-material";
import { Box, Card, CardContent, CardHeader } from "@mui/material";
import Image from "next/image";
import Logo from "../../public/next.svg"

export default function Weather(props) {
    return (<>
        <Box sx={{ boxShadow: 3, width: props.width }}>
            <Card
                sx={
                    {
                        padding: "1.5625rem",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        flexDirection: "column",
                        width: props.width,
                        height: "100%",
                        background: props.bgColor
                    }
                }
            >
                <CardContent>
                    <SubTitle color={props.color ? props.color : "#000"}>Weather</SubTitle>
                </CardContent>
                <WbSunny sx={{ fontSize: "6rem", color: "#f0a551" }} />
                <CardContent>
                    <SubTitle color={props.color ? props.color : "#000"}>{props.temperature ? props.temperature : "25ºC"}</SubTitle>
                </CardContent>
            </Card>
        </Box>
    </>)
}