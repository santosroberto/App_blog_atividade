"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";

type FormType = {
  title: string;
  content: string;
  author: string;
};

export default function Editar() {
  const router = useRouter();
  const params = useParams();

  const [form, setForm] = useState<FormType>({
    title: "",
    content: "",
    author: "",
  });

  //  useEffect corrigido
  useEffect(() => {
    async function loadArticle() {
      const res = await fetch(`/api/articles/${params.id}`);
      const data = await res.json();
      setForm(data);
    }

    if (params?.id) {
      loadArticle();
    }
  }, [params.id]); //  dependência correta

  //  tipagem correta (sem any)
  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  //  tipagem correta
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await fetch(`/api/articles/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    router.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} />

      <textarea name="content" value={form.content} onChange={handleChange} />

      <input name="author" value={form.author} onChange={handleChange} />

      <button type="submit">Salvar</button>
    </form>
  );
}
