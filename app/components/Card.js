// app/components/Card.js
import Image from "next/image";
import styles from "./Card.module.css";
import LikeButton from "./LikeButton"; 

export default function Card({ name, blurb, rating, emoji, genre, image }) {
  return (
    <article className={styles.card}>
      {image ? (
        <div className={styles.imageWrapper}>
          <Image 
            src={image} 
            alt={name} 
            width={240} 
            height={140} 
            className={styles.cardImage} 
          />
        </div>
      ) : (
        <div className={styles.emoji}>{emoji}</div>
      )}
      <h2>{name}</h2>
      {genre && <p className={styles.tagGenre}>📂 {genre}</p>}
      <p>{blurb}</p>
      <p className={styles.stars}>{"⭐".repeat(rating)}</p>

      <LikeButton /> {/* <-- Insert the button here */}
    </article>
  );
}
