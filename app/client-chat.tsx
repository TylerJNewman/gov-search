"use client";

import { Chat } from "@/components/ui/chat";
import { useChat } from "ai/react";
import { toast } from "sonner";

interface ClientChatProps {
  initialSuggestions: string[];
}

export default function ClientChat({ initialSuggestions }: ClientChatProps) {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    append,
    stop,
    isLoading,
  } = useChat({
    onError: (error) => {
      console.log("error", error);
      toast.error("An error occurred while processing your request.");
    },
  });

  const filteredMessages = messages.filter((message) => message.content !== "");

  return (
    <div className="flex h-[100dvh] w-full">
      <div className="flex w-full max-w-3xl overflow-hidden rounded-none sm:rounded-lg shadow-none relative mx-auto">
        <Chat
          className="flex flex-col w-full"
          messages={filteredMessages}
          handleSubmit={handleSubmit}
          input={input}
          handleInputChange={handleInputChange}
          isGenerating={isLoading}
          stop={stop}
          append={append}
          suggestions={initialSuggestions}
        />
      </div>
    </div>
  );
}
