export async function GET() {
  const res = await fetch(
    "https://crudcrud.com/api/7135b43642d7433a9184ad9f53e2619f/articles",
  );

  const data = await res.json();

  return Response.json(data);
}
