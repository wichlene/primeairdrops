import React, { useEffect, useState } from "react";

const projects = [
  { name: "Efsane.tr", link: "https://efsanetr.com/tr_TR/internal/register/?inviteCode=CZS02K" },
  { name: "Grass", link: "https://app.grass.io/register?referral=4AbAhV-0w4MhgKU" },
  { name: "Teneo", link: "https://dashboard.teneo.pro/auth/signup?referralCode=c8uwI" },
  { name: "Jigsaw", link: "https://jigsaw.build?ref=emrckc9mszwf" },
  { name: "Globshaga", link: "https://glob.shaga.xyz/?r=NIgRLgzM5B" },
  { name: "Teafi", link: "https://app.tea-fi.com/?ref=3bbx7e" },
  { name: "3DOS", link: "https://dashboard.3dos.io/register?ref_code=c89a31" },
  { name: "Toggle", link: "https://toggle.pro/sign-up/8df15eb2-bee5-4ef3-bee6-fca54b3ca935" },
  { name: "Despeed", link: "https://app.despeed.net/register?ref=9cmFGcePqiXV" },
  { name: "Perseptron", link: "https://app.blockmesh.xyz/register?invite_code=54fd20e0-32cf-4177-a22f-74eda9161d15" },
  { name: "Incentiv", link: "https://testnet.incentiv.io/login?refCode=6x6Kuh9e7nBrEX9hFYj6SX" },
  { name: "Sosovalue", link: "https://sosovalue.com/join/R98NT7Z7" },
  { name: "Trex", link: "https://s.trex.xyz/lljUoy" },
];

export default function App() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 300);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        transition: "opacity 1s ease-in-out",
        opacity: visible ? 1 : 0,
      }}
    >
      <h1
        style={{
          color: "#FFD700",
          fontSize: "2.5rem",
          marginBottom: "10px",
          textShadow: "0 0 10px #FFD700",
        }}
      >
        PrimeAirdrops
      </h1>

      <p style={{ color: "#aaa", marginBottom: "30px" }}>
        Web3 ve DePIN projelerinde kazanç fırsatlarını keşfet ✨
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {projects.map((p, i) => (
          <div
            key={i}
            style={{
              background: "linear-gradient(145deg, #1a1a1a, #000)",
              border: "1px solid #333",
              borderRadius: "15px",
              padding: "25px 15px",
              transition: "all 0.3s ease",
              boxShadow: "0 0 10px rgba(255,215,0,0.1)",
            }}
            onMouse
