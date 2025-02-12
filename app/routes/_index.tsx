import { json } from "@remix-run/node";
import { useLoaderData, Link } from "@remix-run/react";

export const loader = async () => {
  // Fetch articles from your database
  const articles = [
    { id: 1, title: "पहिला लेख" },
    { id: 2, title: "दुसरा लेख" },
  ];
  return json({ articles });
};

export default function Index() {
  const { articles } = useLoaderData<typeof loader>();

  return (
    <div>
      <h1>Welcome to My Blog</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
