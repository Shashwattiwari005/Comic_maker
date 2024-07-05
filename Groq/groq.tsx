import Groq from "groq-sdk";
import { useAppContext } from "../context/context";

const groq = new Groq({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function Query() {
  const { title } = useAppContext();

  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: `${title}`,
      },
    ],
    model: "llama3-8b-8192",
  });
}

export async function GetScript() {
  const response = await Query();

  console.log(response);
}
