"use client";

import { useEffect, useState } from "react";
import { getArticles, deleteArticle, Article } from "@/lib/api";

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadArticles() {
      const data = await getArticles();
      setArticles(data);
      setLoading(false);
    }

    loadArticles();
  }, []);

  async function handleDelete(id: string) {
    const confirmDelete = confirm("Deseja realmente deletar?");
    if (!confirmDelete) return;

    await deleteArticle(id);

    setArticles((prev) =>
      prev.filter((article) => article._id !== id)
    );
  }

  if (loading) return <p>Carregando...</p>;

  if (articles.length === 0) {
    return <p>Nenhum artigo encontrado.</p>;
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>📰 Blog</h1>

      {articles.map((article) => (
        <div key={article._id}>
          <strong>{article.title}</strong>

          <button onClick={() => handleDelete(article._id!)}>
            🗑️ Deletar
          </button>
        </div>
      ))}
    </main>
  );
}