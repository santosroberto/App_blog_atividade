import { getArticleBySlug } from "@/lib/api";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const article = await getArticleBySlug(params.slug);

  //  ESSENCIAL
  if (!article) return notFound();

  return (
    <main style={{ padding: "20px" }}>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <small>{article.author}</small>
    </main>
  );
}
