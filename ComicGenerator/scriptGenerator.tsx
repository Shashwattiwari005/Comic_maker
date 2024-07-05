import React from "react";
import { useAppContext } from "../context/context";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { GetScript } from "../Groq/groq";

export default function ScriptGenerator() {
  const { title, setTitle } = useAppContext();

  const handleTitleChange = (event: { target: { value: string } }) => {
    setTitle(event.target.value);
  };

  return (
    <div>
      <h1>{title}</h1>
      <Input
        value={title}
        required
        placeholder="Plot of the story"
        onChange={handleTitleChange}
      />
      <Button onClick={GetScript}>Submit</Button>
    </div>
  );
}
