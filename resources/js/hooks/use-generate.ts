import { useState } from "react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

type SetContent = (text: string) => void;

export default function useGenerate(setContent: SetContent) {
    const [loading, setLoading] = useState<boolean>(false);

    const generate = async (prompt: string): Promise<void> => {
        if (!prompt?.trim()) return;

        try {
            setLoading(true);

            const response = await ai.models.generateContent({
                model: "gemini-3-flash-preview",
                contents: `Improve and expand this content:\n${prompt}`,
                config: {
                    temperature: 0.6,
                    maxOutputTokens: 900,
                }
            });

            const text = response?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

            //console.log(response);

            setContent(text);
        } 
        catch (err) {
            console.error("AI Error:", err);
        } 
        finally {
            setLoading(false);
        }
    };

    return { generate, loading };
}