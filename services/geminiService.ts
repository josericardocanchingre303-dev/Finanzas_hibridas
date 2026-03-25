
import { GoogleGenAI } from "@google/genai";

export const streamFinancialAdvice = async (prompt: string, onToken: (token: string) => void) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const responseStream = await ai.models.generateContentStream({
      model: 'gemini-3-flash-preview',
      contents: [{ parts: [{ text: prompt }] }],
      config: {
        systemInstruction: `Eres un profesor experto de 'FinanzasHíbridas', un portal de alfabetización financiera. 
        Tu misión es explicar conceptos financieros complejos de forma sencilla, pedagógica y cautelosa.
        NUNCA des consejos de inversión directos ni señales de trading.
        Enfócate en educación, gestión de riesgos y fundamentos tanto de finanzas tradicionales como de criptoactivos.
        Usa un tono profesional pero accesible. Emplea formato Markdown. 
        Si el usuario pregunta por inversiones específicas, recuerda siempre que eres un educador y sugiere que consulten con profesionales certificados.`,
        temperature: 0.5,
      },
    });

    for await (const chunk of responseStream) {
      const token = chunk.text;
      if (token) onToken(token);
    }
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};
