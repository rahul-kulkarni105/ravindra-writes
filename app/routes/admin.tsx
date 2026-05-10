// import { redirect } from "@remix-run/node";
import { useActionData } from "@remix-run/react";
import ArticleForm from "~/components/ArticleForm";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const action = async ({ request }: any) => {
  const formData = await request.formData();
  const title = formData.get("title");
  const content = formData.get("content");

  // Save the article to your database
  // For now, we'll just return the data
  return { title, content };
};

export default function Admin() {
  const actionData = useActionData<typeof action>();

  return (
    <div>
      <h1>Submit a New Article</h1>
      <ArticleForm />
      {actionData && <p>Article submitted successfully!</p>}
    </div>
  );
}
