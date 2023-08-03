import { Button, Container, Paper } from '@mui/material';
import { styled } from '@mui/system';

export const Section = styled('div',
    {
        shouldForwardProp: (prop) => prop !== "width" && prop !== "height" && prop !== "bgColor" && prop !== "bgImage"
    }
)(
    ({ width, height, bgColor, padding, paddingMobile }) => ({
        width: width ? width : '100%',
        height: height ? height : "100%",
        background: bgColor ? bgColor : "#000",
        backgroundAttachment: "fixed",
        padding: padding ? padding : "6.25rem 0",
        '@media (max-width: 768px)': {
            padding: paddingMobile
        }
    })
)

export const MainContainer = styled(Container)(
    ({ display, justify, align, maxWidth, flexDirection, justifyContentMobile, alignItemsMobile }) => ({
        display: display ? display : 'flex',
        justifyContent: justify ? justify : 'space-between',
        alignItems: align ? align : 'center',
        flexDirection: flexDirection,
        height: '100%',
        '@media (min-width: 1600px)': {
            maxWidth: maxWidth ? maxWidth : "75rem"
        },
        '@media (max-width: 768px)': {
            flexDirection: 'column',
            justifyContent: justifyContentMobile ? justifyContentMobile : 'center',
            alignItems: alignItemsMobile
        }
    })
)

export const Btn = styled(Button,
    {
        shouldForwardProp: (prop) => prop !== "bg" && prop !== "width" && prop !== "height" && prop !== "radius"
    }
)(
    ({ width, height, bg, radius }) => ({
        backgroundColor: bg ? bg : 'yellow',
        width: width ? width : '200px',
        height: height,
        borderRadius: radius,
        '&:hover': {
            backgroundColor: 'red'
        },

    })
);

export const ChatScreen = styled('div')(
    {
        width: '80%',
        background: '#fff',
        height: '25.5rem',
        overflow: 'auto',
        overflowX: 'hidden',
        padding: '.9375rem',
        boxShadow: '0px -3px 3px -2px rgba(0,0,0,0.2), 0px -3px 4px 0px rgba(0,0,0,0.14), -6px -7px 8px 0px rgba(0,0,0,0.12)'
    }
)

export const UserChatAlign = styled('div')(
    {
        display: 'flex',
        width: '100%',
        justifyContent: 'start',
        margin: '0 0 .625rem 0',
    }
)

export const BotChatAlign = styled('div')(
    {
        display: 'flex',
        width: '100%',
        justifyContent: 'end',
        margin: '0 .9375rem .625rem 0',
    }
)

export const PaperUser = styled(Paper)(
    {
        padding: '.5375rem'
    }
)

export const PaperBot = styled(Paper)(
    {
        padding: '.5375rem',
        background: '#262626',
        color: '#fff'
    }
)

export const ButtonChat = styled(Button)(
    {
        position: 'absolute',
        right: '0.125rem',
        top: '50%',
        transform: 'translateY(-50%)'
    }
)

export const FlexWrap = styled('div')(
    ({ gap, marginTopMobile }) => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: gap ? gap : '.9375rem',
        '@media (max-width: 768px)': {
            marginTop: marginTopMobile,
        }
    })
)

export const FlexAbove = styled('div')(
    {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'end'
    }
)

export const ContentWrap = styled('div')(
    {

    }
)
export const LetterWrap = styled('div')(
    {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
    }
)

export const FrameScreen = styled('div')(
    {
        position: 'absolute',
        width: '90%',
        height: 'auto',
        border: 'solid 15px #232323',
        padding: '2.1875rem',
        paddingBottom: '3.7875rem',
        background: '#ffffff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: '3.375rem',
        transform: 'translateY(50%)',
        boxShadow: 'inset 0px 0px 16px 9px rgba(0, 0, 0, .4)'
        
    }
)

