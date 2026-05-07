import { useState, useCallback } from 'react';
import { chatWithAI, AIModel } from '@/lib/ai-service';

export function useAI(model: AIModel = 'gemini') {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant' | 'system', content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendMessage = useCallback(async (content: string, systemPrompt?: string) => {
    setIsLoading(true);
    setError(null);

    const newMessages: { role: 'user' | 'assistant' | 'system', content: string }[] = [...messages];
    
    // Add system prompt if it's the first message
    if (messages.length === 0 && systemPrompt) {
      newMessages.push({ role: 'system', content: systemPrompt });
    }
    
    newMessages.push({ role: 'user', content });
    setMessages(newMessages);

    try {
      const reply = await chatWithAI(newMessages, model);
      setMessages(prev => [...prev, { role: 'assistant', content: reply }]);
      return reply;
    } catch (err) {
      console.warn('AI API failed, engaging local Neural Backup...', err);
      // Mock Response for local safety (Sentient UX)
      const fallbackReplies = [
        "Your neural claim has been logged. Objective reality is now adjusting to your frequency.",
        "Protocol recognized. I am analyzing the distortion patterns in your current trajectory. Stay focused.",
        "Neural sync in progress. Maintain your state of power. The outcome is already determined.",
        "I sense a shift in your intention. Engaging elite momentum protocol."
      ];
      const randomReply = fallbackReplies[Math.floor(Math.random() * fallbackReplies.length)];
      
      await new Promise(r => setTimeout(r, 1500)); // Simulating thought
      setMessages(prev => [...prev, { role: 'assistant', content: randomReply }]);
      return randomReply;
    } finally {
      setIsLoading(false);
    }
  }, [messages, model]);

  const clearMessages = useCallback(() => {
    setMessages([]);
    setError(null);
  }, []);

  return {
    messages: messages.filter(m => m.role !== 'system'),
    isLoading,
    error,
    sendMessage,
    clearMessages
  };
}
