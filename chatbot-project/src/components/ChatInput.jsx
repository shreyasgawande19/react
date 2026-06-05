import { useState } from 'react'
import { chatbot } from 'supersimpledev';
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
    const [isLoading, setIsLoading] = useState(false);
    const [inputText, setInputText] = useState("");

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    function sendMessage() {
        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText,
                sender: "user",
                id: crypto.randomUUID()
            },
            {
                message: "Typing...",
                sender: "chatbot",
                id: crypto.randomUUID(),
                isLoading: true
            }
        ];

        setChatMessages(newChatMessages);
        setIsLoading(true);

        const response = chatbot.getResponse(inputText);

        setTimeout(() => {
            const updatedMessages = newChatMessages.map(msg => {
                if (msg.isLoading) {
                    return {
                        message: response,
                        sender: "chatbot",
                        id: crypto.randomUUID()
                    };
                }
                return msg;
            });

            setChatMessages(updatedMessages);
            setIsLoading(false);
        }, 800);

        setInputText("");
    }
    return (

        <div class="chat-input">
            <input
                type="text" placeholder="Send a message to Chatbot"
                size="30"
                class="form-control"
                onChange={saveInputText}
                value={inputText}
            />
            <button onClick={sendMessage}
                class="btn-primary">
                {isLoading ? "Sending..." : "Send"}
            </button>
        </div>
    )
}

