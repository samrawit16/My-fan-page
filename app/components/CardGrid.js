// app/components/CardGrid.js
import Card from "./Card";
import styles from "./CardGrid.module.css";

export default function CardGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          blurb={item.blurb}
          rating={item.rating}
          emoji={item.emoji}
          genre={item.genre}
          image={item.image}
        />
      ))}
    </div>
  );
}
