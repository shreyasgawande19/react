import RobotProfileImg from '../assets/chatbotimg.png';
import UserProfileImg from '../assets/userimg.png';
import './ChatMessage.css';

export function ChatMessage({ message, sender }) {
    // const message = props.message;
    // const sender = props.sender; --> // const {message,sender}= props;
    /*
    if (sender === 'chatbot') {
    return (
    <div>
        <img src={RobotProfileImg} alt="Chatbot Icon" width="50" height="50" />
        {message}
    </div>
    );
    }
    */
    return (
        <div class={sender === 'chatbot' ? 'chatbot-message' : 'user-message'}>
            {sender === 'chatbot' && (
                <img src={RobotProfileImg} alt="Chatbot Icon" class="message-icon" />
            )}
            <div class="message-content">
                {message === "Typing..." ? (
                    <div class="loader"></div>
                ) : (
                    message
                )}
            </div>
            {sender === 'user' && (
                <img src={UserProfileImg} alt="User Icon" class="message-icon" />
            )}
        </div>
    );
}