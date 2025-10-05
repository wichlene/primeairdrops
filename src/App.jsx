import React from "react";
import { motion } from "framer-motion";

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
  return (
    <div
      style={{
        backgroundColor: "black",
        color: "white",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        padding: "40px 20px",
        textAlign: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: "2.5rem",
          color: "#FFD700",
          marginBottom: "10px",
          textShadow: "0 0 10px #FFD700",
        }}
      >
        PrimeAirdrops
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ color: "#aaa", marginBottom: "40px" }}
      >
        Web3 ve DePIN projelerinde kazanç fırsatlarını keşfet ✨
      </motion.p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px #FFD700" }}
            style={{
              background: "linear-gradient(145deg, #1a1a1a, #000)",
              border: "1px solid #333",
              borderRadius: "15px",
              padding: "25px 15px",
              textAlign: "center",
            }}
          >
            <h3 style={{ color: "#FFD700", marginBottom: "10px" }}>{project.name}</h3>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#FFD700",
                color: "#000",
                padding: "8px 18px",
                borderRadius: "8px",
                fontWeight: "bold",
                textDecoration: "none",
                transition: "all 0.3s ease",
              }}
            >
              Katıl
            </a>
          </motion.div>
        ))}
      </div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        style={{
          marginTop: "50px",
          color: "#666",
          fontSize: "0.9rem",
        }}
      >
        © 2025 PrimeAirdrops — Tüm Hakları Saklıdır
      </motion.footer>
    </div>
  );
}
