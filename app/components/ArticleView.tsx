import { useState } from "react";

interface ArticleViewProps {
  title: string;
  content: string;
  translatedTitle?: string;
  translatedContent?: string;
}

export default function ArticleView({
  title,
  content,
  translatedTitle,
  translatedContent
}: ArticleViewProps) {
  const [isMarathi, setIsMarathi] = useState(true);

  return (
    <div>
      <button onClick={() => setIsMarathi(!isMarathi)}>
        {isMarathi ? "View in English" : "मराठीत पहा"}
      </button>
      <h1>{isMarathi ? title : translatedTitle}</h1>
      <p>{isMarathi ? content : translatedContent}</p>
    </div>
  );
}
