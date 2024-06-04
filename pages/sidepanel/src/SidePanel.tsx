// External Dependencies
import { useEffect, useState } from 'react';

// Relative Dependencies
import '@src/SidePanel.css';
import { withErrorBoundary, withSuspense } from '@chrome-extension-boilerplate/shared';
import ChatInput from '@src/components/ChatInput';
import { Message } from '@src/types';
import { Providers } from './Providers';
import ChatMessages from './components/ChatMessages';

const SidePanel = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    chrome.storage.local.get('chatMessages', result => {
      if (result.chatMessages) {
        setMessages(result.chatMessages);
      }
    });
  }, [messages]);

  return (
    <Providers>
      <div className="flex h-screen max-h-screen flex-col items-center">
        <ChatMessages messages={messages} />
        <ChatInput messages={messages} setMessages={setMessages} />
      </div>
    </Providers>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
