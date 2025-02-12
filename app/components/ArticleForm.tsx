import { Form } from '@remix-run/react';

export default function ArticleForm() {
  return (
    <Form method="post">
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />
      </div>
      <div>
        <label htmlFor="content">Content:</label>
        <textarea id="content" name="content" required></textarea>
      </div>
      <button type="submit">Submit Article</button>
    </Form>
  );
}
