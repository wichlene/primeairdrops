import React from "react";
import { Github, Instagram, Twitter, Facebook, MessageCircle } from "lucide-react";

export default function App() {
  const socials = [
    { icon: <MessageCircle className="w-6 h-6" />, url: "https://discord.com/channels/@wichlene" },
    { icon: <Facebook className="w-6 h-6" />, url: "https://www.facebook.com/profile.php?id=61573834593870" },
    { icon: <Instagram className="w-6 h-6" />, url: "https://www.instagram.com/primeairdrop3/" },
    { icon: <Twitter className="w-6 h-6" />, url: "https://x.com/muhtac10" },
    { icon: <Github className="w-6 h-6" />, url: "https://github.com/wichlene" },
  ];

  const projects = [
    { name: "io.net", type: "DePIN", reward: "$200+", link: "#" },
    { name: "Grass", type: "DePIN", reward: "Bekleniyor", link: "#" },
    { name: "LayerZero", type: "Web3", reward: "$150+", link: "#" },
    { name: "Aethir", type: "DePIN", reward: "$100+", link: "#" },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "black", color: "white", padding: "40px", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", color: "#FFD700", marginBottom: "10px" }}>PrimeAirdrops</h1>
      <p style={{ color: "#aaa", marginBottom: "30px" }}>
        Web3 ve DePIN projeleri için güvenli yönlendirme platformu
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "40px" }}>
        {socials.map((item, i) => (
          <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" style={{ color: "white" }}>
            {item.icon}
          </a>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", maxWidth: "600px", margin: "0 auto" }}>
        {projects.map((p, i) => (
          <div key={i} style={{ border: "1px solid #333", borderRadius: "10px", padding: "20px" }}>
            <h2 style={{ color: "#FFD700" }}>{p.name}</h2>
            <p style={{ color: "#aaa" }}>{p.type}</p>
            <p style={{ color: "#FFD700", marginTop: "10px" }}>{p.reward}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
