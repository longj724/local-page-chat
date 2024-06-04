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
      <div className="flex h-screen max-h-screen flex-col">
        <ChatMessages messages={messages} />
        <div className="flex h-16 shrink-0 items-center border-t bg-gray-100 px-4 dark:border-gray-800 dark:bg-gray-950">
          <ChatInput messages={messages} setMessages={setMessages} />
        </div>
      </div>
    </Providers>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
