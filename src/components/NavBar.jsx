import React from 'react'
import { Section } from "@/styles/generalStyled";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Container } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/next.svg"

export default function NavBar() {
    return (<>
        <Section sx={{ position: "absolute", padding: ".9375rem 0" }} height="auto" bgColor="transparent">
            <Container sx={{ display: "flex", justifyContent: "end", alignItems: "center", gap: ".625rem" }} maxWidth="xl">
                <Link href="https://github.com/edustadler/" target='blank' style={{ zIndex: '999' }}>
                    <GitHub />
                </Link>
                <Link href="https://www.linkedin.com/in/edu-stadler/" target='blank' style={{ zIndex: '999' }}>
                    <LinkedIn />
                </Link>
            </Container>
        </Section>
    </>)
}