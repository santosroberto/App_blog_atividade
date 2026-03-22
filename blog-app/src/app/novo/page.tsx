"use client";

import { useState } from "react";

type FormType = {
  title: string;
  slug: string;
  content: string;
  author: string;
};

export default function NovoArtigo() {
  const [form, setForm] = useState<FormType>({
    title: "",
    slug: "",
    content: "",
    author: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    console.log(form);
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>Novo Artigo</h1>

      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Título" onChange={handleChange} />
        <br />

        <input
          name="dadosPublicacao"
          placeholder="Dados de Publicação"
          onChange={handleChange}
        />
        <br />

        <textarea
          name="content"
          placeholder="Conteúdo"
          onChange={handleChange}
        />
        <br />

        <input name="author" placeholder="Autor" onChange={handleChange} />
        <br />

        <button type="submit">Salvar</button>
      </form>
    </main>
  );
}
