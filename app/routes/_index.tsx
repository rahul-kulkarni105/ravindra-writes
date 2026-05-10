import { useLoaderData, Link } from "@remix-run/react";
import articleData from '~/data/articleData';
import styles from '~/styles/index.css?url';

export const loader = async () => {
  // Fetch articles from your database
  const articles = articleData;
  return { articles };
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function Index() {
  const { articles } = useLoaderData<typeof loader>();

  return (
    <div className="container">
      <h1>Welcome to My Blog</h1>
      <ul className="article-list">
        {articles.map((article) => (
          <li key={article.id} className="article-item">
            <Link to={`/article/${article.id}`} className="article-link">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
