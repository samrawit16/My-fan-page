
"use client"; 

import { useState } from "react";
import styles from "./LikeButton.module.css";

export default function LikeButton({ event }) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = (e) => {
    e.preventDefault(); 
    setLiked(!liked);
  };

  return (
    <button onClick={handleLikeClick} className={liked ? styles.liked : styles.unliked}>
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
}
