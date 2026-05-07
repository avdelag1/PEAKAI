export type AIModel = 'kimi' | 'gemini';

interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

const KIMI_API_KEY = import.meta.env.VITE_KIMI_API_KEY;
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function chatWithAI(messages: ChatMessage[], model: AIModel = 'gemini') {
  try {
    if (model === 'kimi') {
      return await chatWithKimi(messages);
    } else {
      return await chatWithGemini(messages);
    }
  } catch (error) {
    console.warn(`Primary AI model ${model} failed, attempting fallback...`, error);
    try {
      // Fallback to the other provider
      if (model === 'gemini') {
        return await chatWithKimi(messages);
      } else {
        return await chatWithGemini(messages);
      }
    } catch (fallbackError) {
      console.error('All AI models failed.', fallbackError);
      throw error; // Re-throw the original error if fallback also fails
    }
  }
}

async function chatWithKimi(messages: ChatMessage[]) {
  if (!KIMI_API_KEY) throw new Error('Kimi API key not configured');

  const response = await fetch('https://api.moonshot.ai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${KIMI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'moonshot-v1-8k',
      messages,
      temperature: 0.7,
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Kimi API call failed');
  }

  const data = await response.json();
  return data.choices[0].message.content;
}

async function chatWithGemini(messages: ChatMessage[]) {
  if (!GEMINI_API_KEY) throw new Error('Gemini API key not configured');

  // Convert messages to Gemini format
  const contents = messages.map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: msg.content }]
  }));

  // Handle system prompt if present (Gemini 1.5+ style)
  const systemInstruction = messages.find(m => m.role === 'system');
  const filteredContents = contents.filter(c => c.role !== 'system');

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents: filteredContents,
      system_instruction: systemInstruction ? {
        parts: [{ text: systemInstruction.content }]
      } : undefined,
      generationConfig: {
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
        maxOutputTokens: 1024,
      },
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error?.message || 'Gemini API call failed');
  }

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
}
