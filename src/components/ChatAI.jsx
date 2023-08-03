import { BotChatAlign, ButtonChat, ChatScreen, PaperBot, PaperUser, UserChatAlign } from "@/styles/generalStyled";
import { Paragraph, TextArea } from "@/styles/textComponents";
import { Paper, } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function ChatAI() {
    const [question, setQuestion] = useState('')
    const [group, setGroup] = useState([])

    const handleGroupQuestion = async () => {
        const userMessage = { content: question, role: 'user' }
        setGroup([...group, userMessage])
        setQuestion('')

        const chatbotMessage = await getChatbotResponse()
        setGroup((prevGroup) => [...prevGroup, chatbotMessage])
    }

    const handleQuestion = (print) => {
        setQuestion(print)
    }

    const getChatbotResponse = async () => {
        const options = {
            method: 'POST',
            body: JSON.stringify({
                content: question,
                temperature: 0.5,
                max_tokens: 50,
                n: 3
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }
        try {
            const response = await fetch('http://localhost:8001/completions', options);
            const data = await response.json();
            const message = data.choices[0].message.content
            const role = 'assistant'
            return { content: message, role: role }
        } catch (error) {
            console.error('errorfront')
        }
    }



    return (<>

        <ChatScreen>

            {
                group.map(
                    (chat, index) =>
                    (
                        chat.role === 'user'
                            ?
                            <UserChatAlign key={index}>
                                <PaperUser>
                                    <Paragraph>{chat.content}</Paragraph>
                                </PaperUser>
                            </UserChatAlign>
                            :
                            <BotChatAlign>
                                <PaperBot>
                                    <Paragraph color="#fff">{chat.content}</Paragraph>
                                </PaperBot>
                            </BotChatAlign>
                    )
                )
            }

        </ChatScreen>

        <Paper sx={{ width: '80%', position: 'relative', display: 'flex' }}>
            <TextArea
                placeholder="Type your question..."
                onChange={(e) => handleQuestion(e.target.value)}
                value={question}
            />
            <ButtonChat onClick={handleGroupQuestion}>Send</ButtonChat>

        </Paper>
    </>)
}

