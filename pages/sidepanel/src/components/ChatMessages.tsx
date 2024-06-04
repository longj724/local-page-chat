// External Dependencies

// Relative Dependencies
import { Message } from '@src/types';
import ChatMessage from './ChatMessage';

type Props = {
  messages: Message[];
};

const ChatMessages = ({ messages }: Props) => {
  return (
    <div className="flex-1 overflow-auto p-4">
      <div className="grid gap-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
      </div>
    </div>
  );
};

export default ChatMessages;
