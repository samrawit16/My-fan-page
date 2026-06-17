// app/components/Nav.js
import Link from "next/link";

export default function Nav() {
  return (
    <nav style={{ 
      display: "flex", 
      gap: "24px", 
      justifyContent: "center", 
      padding: "1rem 0",
      margin: "0 auto",
      maxWidth: "900px" 
    }}>
      <Link href="/" style={{ textDecoration: "none", color: "#6366f1", fontWeight: "bold" }}>Home</Link>
      <Link href="/about" style={{ textDecoration: "none", color: "#64748b" }}>About</Link>
    </nav>
  );
}
