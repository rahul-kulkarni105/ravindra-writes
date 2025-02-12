import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ArticleView from "~/components/ArticleView";
import { translateText } from "~/utils/translate.server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loader = async ({ params }: any) => {
  // Fetch the article from your database using params.slug
  console.log('params', params)
  const article = {
    title: "पहिला लेख",
    content: "हा एक मराठी लेख आहे.",
  };

  const translatedTitle = await translateText(article.title, "mr", "en");
  const translatedContent = await translateText(article.content, "mr", "en");

  return json({ ...article, translatedTitle, translatedContent });
};

export default function Article() {
  const article = useLoaderData<typeof loader>();

  return <ArticleView {...article} />;
}
