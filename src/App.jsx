import { Github, Instagram, Twitter, Facebook, MessageCircle } from "lucide-react";

export default function App() {
  const socials = [
    { icon: <MessageCircle className="w-5 h-5" />, url: "https://discord.com/channels/@wichlene" },
    { icon: <Facebook className="w-5 h-5" />, url: "https://www.facebook.com/profile.php?id=61573834593870" },
    { icon: <Instagram className="w-5 h-5" />, url: "https://www.instagram.com/primeairdrop3/" },
    { icon: <Twitter className="w-5 h-5" />, url: "https://x.com/muhtac10" },
    { icon: <Github className="w-5 h-5" />, url: "https://github.com/wichlene" },
  ];

  const projects = [
    { name: "io.net", type: "DePIN", reward: "$200+", link: "#" },
    { name: "Grass", type: "DePIN", reward: "Bekleniyor", link: "#" },
    { name: "LayerZero", type: "Web3", reward: "$150+", link: "#" },
    { name: "Aethir", type: "DePIN", reward: "$100+", link: "#" },
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 flex flex-col items-center px-6 py-12 space-y-10">
      <header className="text-center space-y-3">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
          PrimeAirdrops
        </h1>
        <p className="text-gray-400 max-w-xl mx-auto">
          Web3 ve DePIN projeleri için güvenli yönlendirme platformu.
        </p>
      </header>

      <section className="flex space-x-5">
        {socials.map((item, i) => (
          <a key={i} href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-500">
            {item.icon}
          </a>
        ))}
      </section>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl w-full">
        {projects.map((p, i) => (
          <div
            key={i}
            className="p-5 border border-gray-800 rounded-2xl hover:border-yellow-500 transition"
          >
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-400">{p.type}</p>
            <p className="text-sm text-yellow-400 mt-2">{p.reward}</p>
          </div>
        ))}
      </main>
    </div>
  );
}
