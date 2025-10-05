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
<h1>Öne Çıkan Linkler</h1>
  <ul>
    <li><a href="https://efsanetr.com/tr_TR/internal/register/?inviteCode=CZS02K">Efsane.tr</a></li>
    <li><a href="https://app.grass.io/register?referral=4AbAhV-0w4MhgKU">Grass</a></li>
    <li><a href="https://dashboard.teneo.pro/auth/signup?referralCode=c8uwI">Teneo</a></li>
    <li><a href="https://jigsaw.build?ref=emrckc9mszwf">Jigsaw</a></li>
    <li><a href="https://glob.shaga.xyz/?r=NIgRLgzM5B">Globshaga</a></li>
    <li><a href="https://app.tea-fi.com/?ref=3bbx7e">Teafi</a></li>
    <li><a href="https://dashboard.3dos.io/register?ref_code=c89a31">3DOS</a></li>
    <li><a href="https://toggle.pro/sign-up/8df15eb2-bee5-4ef3-bee6-fca54b3ca935">Toggle</a></li>
    <li><a href="https://app.despeed.net/register?ref=9cmFGcePqiXV">Despeed</a></li>
    <li><a href="https://app.blockmesh.xyz/register?invite_code=54fd20e0-32cf-4177-a22f-74eda9161d15">Perseptron</a></li>
    <li><a href="https://testnet.incentiv.io/login?refCode=6x6Kuh9e7nBrEX9hFYj6SX">Incentiv</a></li>
    <li><a href="https://sosovalue.com/join/R98NT7Z7">Sosovalue</a></li>
    <li><a href="https://s.trex.xyz/lljUoy">Trex</a></li>
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
