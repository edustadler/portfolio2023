import { Button, Container, Paper } from '@mui/material';
import { styled } from '@mui/system';

export const Section = styled('div',
    {
        shouldForwardProp: (prop) => prop !== "width" && prop !== "height" && prop !== "bgColor" && prop !== "bgImage"
    }
)(
    ({ width, height, bgColor, padding }) => ({
        width: width ? width : '100%',
        height: height ? height : "100%",
        background: bgColor ? bgColor : "#262626",
        backgroundAttachment: "fixed",
        padding: padding ? padding : "9.375rem 0"
    })
)

export const MainContainer = styled(Container)(
    ({ display, justify, align }) => ({
        display: display ? display : 'flex',
        justifyContent: justify ? justify : 'space-between',
        alignItems: align ? align : 'center',
        height: '100%',
        '@media (min-width: 1200px)' : {
            maxWidth: "75rem"
        },
        '@media (max-width: 768px)' : {
            flexDirection: 'column'
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
        height: '25.5rem' ,
        overflow: 'auto',
        overflowX: 'hidden',
        padding: '.9375rem',
        boxShadow: '0px -3px 3px -2px rgba(0,0,0,0.2), 0px -3px 4px 0px rgba(0,0,0,0.14), -6px -7px 8px 0px rgba(0,0,0,0.12)'
    }
)

export const UserChatAlign = styled('div') (
    {
        display:  'flex',
        width: '100%',
        justifyContent: 'start',
        margin: '0 0 .625rem 0',
    }
)

export const BotChatAlign = styled('div') (
    {
        display:  'flex',
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
        ({ gap }) => ({
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: gap ? gap : '.9375rem'
    })
)

export const FlexAbove = styled('div')(
    {
        display: 'flex', flexDirection: 'column', justifyContent: 'end'
    }
)


