import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import ArticleView from "~/components/ArticleView";
import { translateText } from "~/utils/translate.server";
import articleData from "~/data/articleData.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loader = async ({ params }: any) => {
  // Fetch the article from your database using params.slug
  console.log('params', params);

  const translatedTitle = await translateText(articleData.title, "mr", "en");
  const translatedContent = await translateText(articleData.content, "mr", "en");

  return json({ ...articleData, translatedTitle, translatedContent });
};

export default function Article() {
  const article = useLoaderData<typeof loader>();

  return <ArticleView {...article} />;
}