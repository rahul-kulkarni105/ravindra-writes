import { useState } from "react";
import styles from '~/styles/ArticleView.css?url';

interface ArticleViewProps {
  title: string;
  content: string;
  translatedTitle?: string;
  translatedContent?: string;
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function ArticleView({
  title,
  content,
  translatedTitle,
  translatedContent
}: ArticleViewProps) {
  const [isMarathi, setIsMarathi] = useState(true);

  return (
    <div className="article-container">
      <button className="toggle-button" onClick={() => setIsMarathi(!isMarathi)}>
        {isMarathi ? "View in English" : "मराठीत पहा"}
      </button>
      <h1 className="article-title">{isMarathi ? title : translatedTitle}</h1>
      <p className="article-content">{isMarathi ? content : translatedContent}</p>
    </div>
  );
}
