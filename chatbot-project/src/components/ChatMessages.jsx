import { useRef, useEffect } from 'react'
import { ChatMessage } from './ChatMessage';
import './ChatMessages.css';

export function ChatMessages({ chatMessages }) {
    const chatMessagesEndRef = useRef(null);
    useEffect(() => {
        const container = chatMessagesEndRef.current;
        if (container) {
            container.scrollTop = container.scrollHeight;
        }
    }, [chatMessages]);

    return (
        <div class="chat-messages" ref={chatMessagesEndRef}>
            {chatMessages.map((chatMessage) => {
                return (
                    <ChatMessage
                        message={chatMessage.message}
                        sender={chatMessage.sender}
                        key={chatMessage.id}
                    />
                );
            })}
        </div>
    );
}

export default ChatMessages;