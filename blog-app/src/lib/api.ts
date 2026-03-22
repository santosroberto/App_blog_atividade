const BASE_URL =
  "https://crudcrud.com/api/7135b43642d7433a9184ad9f53e2619f/articles";

// Tipo do Article
export type Article = {
  _id?: string;
  title: string;
  slug: string;
  content: string;
  author: string;
  createdAt: string;
};

//  Buscar todos os artigos
export async function getArticles(): Promise<Article[]> {
  const res = await fetch(BASE_URL, {
    cache: "no-store", // evita cache no Next.js
  });

  if (!res.ok) {
    throw new Error("Erro ao buscar artigos");
  }

  return res.json();
}

// Buscar artigo por slug
export async function getArticleBySlug(slug: string) {
  const articles = await getArticles();
  return articles.find((a) => a.slug === slug);
}

//  Criar artigo (POST)
export async function createArticle(article: Article) {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(article),
  });

  if (!res.ok) {
    throw new Error("Erro ao criar artigo");
  }

  return res.json();
}

//  Deletar artigo
export async function deleteArticle(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("Erro ao deletar");
  }
}
