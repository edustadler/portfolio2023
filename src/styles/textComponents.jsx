import { Padding } from "@mui/icons-material";
import { styled } from "@mui/system";

export const Title = styled('h1')(
    ({ color, fontSize, lineHeight, marginBottom, mobileFontSize, width, height, wordBreak, letterSpacing }) => ({
        fontFamily: 'Poppins',
        fontSize,
        transition: 'ease all 500ms',
        color: color || '#e6dcd1',
        lineHeight: lineHeight ? lineHeight : '3rem',
        marginBottom: marginBottom ? marginBottom : '1.5625rem',
        width,
        height,
        wordBreak,
        letterSpacing,
        '@media (max-width: 768px)': {
            fontSize: mobileFontSize
        }
        
    })
)

export const SubTitle = styled('h2')(
    ({fontSize, color}) => ({
        color: color ? color : '#e6dcd1',
        fontSize,
    })
)

export const Paragraph = styled('p') (
    ({ color, fontSize, lineHeight, textAlign, opacity, mobileFontSize }) => ({
        color: color ? color : '#e3d6be',
        fontSize,
        lineHeight,
        textAlign,
        opacity,
        /* transform: 'translateY(45px)' */

        '@media (max-width: 768px)': {
            fontSize: mobileFontSize
        }
    })
)

export const OverTitle = styled('span')(
    ({color}) => ({
        color: color ? color : '#ffbf13',
        marginBottom: '.9375rem',
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



