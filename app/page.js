// app/page.js
import { items } from "./data";
import Hero from "./components/Hero";
import CardGrid from "./components/CardGrid";

export default function Home() {
  return (
    <main>
      <Hero
        title="🎮 My Favorite Video Games"
        tagline="I like playing video Games and my favorite video game is MineCraft"
      />
      <CardGrid items={items} />
    </main>
  );
}
