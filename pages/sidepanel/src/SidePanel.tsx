// External Dependencies
import { ComponentPropsWithoutRef } from 'react';
import { Send } from 'lucide-react';

// Relative Dependencies
import '@src/SidePanel.css';
import {
  exampleThemeStorage,
  useStorageSuspense,
  withErrorBoundary,
  withSuspense,
} from '@chrome-extension-boilerplate/shared';
import { AvatarImage, AvatarFallback, Avatar } from '@src/components/ui/avatar';
import { Button } from '@src/components/ui/button';
import { Input } from '@src/components/ui/input';

const SidePanel = () => {
  const theme = useStorageSuspense(exampleThemeStorage);

  return (
    <div className="flex h-screen max-h-screen flex-col">
      <div className="flex-1 overflow-auto p-4">
        <div className="grid gap-4">
          <div className="flex items-start gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="max-w-[75%] space-y-2">
              <div className="rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800">
                <p>Hey there! How's it going?</p>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">10:30 AM</div>
            </div>
          </div>
          <div className="flex justify-end items-start gap-3">
            <div className="max-w-[75%] space-y-2">
              <div className="rounded-lg bg-blue-500 p-3 text-sm text-white">
                <p>Pretty good, thanks for asking!</p>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">10:31 AM</div>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex items-start gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="max-w-[75%] space-y-2">
              <div className="rounded-lg bg-gray-100 p-3 text-sm dark:bg-gray-800">
                <p>That's great to hear! Do you have any plans for the weekend?</p>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">10:32 AM</div>
            </div>
          </div>
          <div className="flex justify-end items-start gap-3">
            <div className="max-w-[75%] space-y-2">
              <div className="rounded-lg bg-blue-500 p-3 text-sm text-white">
                <p>I'm planning to go hiking with some friends. It should be a lot of fun!</p>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">10:33 AM</div>
            </div>
            <Avatar className="h-8 w-8">
              <AvatarImage alt="Avatar" src="/placeholder-avatar.jpg" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
      <div className="flex h-16 shrink-0 items-center border-t bg-gray-100 px-4 dark:border-gray-800 dark:bg-gray-950">
        <Input className="flex-1" placeholder="Type your message..." type="text" />
        <Button className="ml-2" size="icon" variant="ghost">
          <Send className="h-5 w-5" />
          <span className="sr-only">Send message</span>
        </Button>
      </div>
    </div>
  );
};

export default withErrorBoundary(withSuspense(SidePanel, <div> Loading ... </div>), <div> Error Occur </div>);
