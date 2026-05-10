import { useLoaderData } from '@remix-run/react';
import ArticleView from '~/components/ArticleView';
import { translateText } from '~/utils/translate.server';
import articleData from '~/data/articleData';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const loader = async ({ params }: any) => {
  // Fetch the article from your database using params.slug
  console.log('params', params);
  console.log('test');

  const article = articleData.find(a => a.id === Number(params.slug));

  if (!article) {
    throw new Response("Not Found", { status: 404 });
  }

  const translatedTitle = await translateText(article.title, 'mr', 'en');
  const translatedContent = await translateText(
    article.content,
    'mr',
    'en'
  );

  return { ...article, translatedTitle, translatedContent };
};

export default function Article() {
  const article = useLoaderData<typeof loader>();

  return <ArticleView {...article} />;
}
