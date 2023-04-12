import { Padding } from "@mui/icons-material";
import { styled } from "@mui/system";

export const Title = styled('h1')(
    ({ color, fontSize, lineHeight, marginBottom, backgroundImage }) => ({
        fontFamily: 'Poppins',
        fontSize,
        transition: 'ease all 500ms',
        color: color,
        lineHeight: lineHeight ? lineHeight : '3rem',
        marginBottom: marginBottom ? marginBottom : '1.5625rem',
        backgroundColor: '#fff',
        WebkitBackgroundImage: 'gradient(linear,left top,right top,from(#0d99ff),to(#99faf4))',
        backgroundImage: backgroundImage ? backgroundImage :'linear-gradient(180deg,#0d99ff 0%,#111499 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',



        '&:hover': {
            color: "#ff5200"
        }
    })
)

export const SubTitle = styled('h2')(
    ({color}) => ({
        color: color ? color : '#fff'
    })
)

export const Paragraph = styled('p') (
    ({ color, fontSize, lineHeight }) => ({
        color: color ? color : '#3d3d3d',
        fontSize,
        lineHeight
    })
)

export const OverTitle = styled('span')(
    ({color}) => ({
        color: color ? color : '#ffd687',
        marginBottom: '.9375rem'
    })
)


export const TextArea = styled('textarea')(
    {
        resize: 'none',
        width: '100%',
        minHeight: '6.875rem',
        padding: '.625rem',

        '&:focus-visible' : {
            outline: 'none',
        }
    }
)

export const SpanText = styled('span')(
    {
        width: '50000px',
        fontSize: '5rem',
        color: "#fff",
        display: 'inline'
    }
)



