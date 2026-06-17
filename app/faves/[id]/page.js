// app/faves/[id]/page.js
import { items } from "../../data";

export default async function FaveDetail({ params }) {
  const { id } = await params; 
  const item = items.find((i) => String(i.id) === id);

  if (!item) {
    return (
      <main>
        <h1>Item Not Found</h1>
        <p>Sorry, that favorite item doesn't exist.</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>{item.emoji} {item.name}</h1>
      {item.genre && <p style={{ color: "#64748b" }}>📂 Category: {item.genre}</p>}
      <p style={{ fontSize: "1.2rem", margin: "1rem 0" }}>{item.blurb}</p>
      <p>{"⭐".repeat(item.rating)}</p>
    </main>
  );
}
