
import { Github, Instagram, Twitter, Facebook, Discord } from 'lucide-react'

export default function App() {
  const socials = [
    { icon: <Discord className='w-5 h-5' />, url: 'https://discord.com/channels/@wichlene' },
    { icon: <Facebook className='w-5 h-5' />, url: 'https://www.facebook.com/profile.php?id=61573834593870' },
    { icon: <Instagram className='w-5 h-5' />, url: 'https://www.instagram.com/primeairdrop3/' },
    { icon: <Twitter className='w-5 h-5' />, url: 'https://x.com/muhtac10' },
    { icon: <Github className='w-5 h-5' />, url: 'https://github.com/wichlene' },
  ]

  const projects = [
    { name: 'io.net', type: 'DePIN', reward: '$200+', link: '#' },
    { name: 'Grass', type: 'DePIN', reward: 'Bekleniyor', link: '#' },
    { name: 'LayerZero', type: 'Web3', reward: '$150+', link: '#' },
    { name: 'Aethir', type: 'DePIN', reward: '$100+', link: '#' },
  ]

  return (
    <div className='min-h-screen bg-black text-gray-100 flex flex-col items-center px-6 py-12 space-y-10'>
      <header className='text-center space-y-3'>
        <h1 className='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600'>
          PrimeAirdrops
        </h1>
        <p className='text-gray-400 max-w-xl mx-auto'>
          En güncel ve güvenilir Web3, DePIN ve Airdrop fırsatlarını keşfet. PrimeAirdrops ile erken katıl, kazancı yakala.
        </p>
      </header>

      <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
        {projects.map((p) => (
          <div key={p.name} className='bg-neutral-900 border border-yellow-700/30 hover:border-yellow-500/50 transition p-6 space-y-3 rounded-2xl'>
            <h2 className='text-xl font-semibold text-yellow-400'>{p.name}</h2>
            <p className='text-gray-400'>Tür: {p.type}</p>
            <p className='text-gray-400'>Tahmini Ödül: {p.reward}</p>
            <a
              href={p.link}
              target='_blank'
              className='inline-block px-4 py-2 bg-gradient-to-r from-yellow-500 to-yellow-700 hover:from-yellow-400 hover:to-yellow-600 text-black font-semibold rounded-lg'
            >
              Katıl
            </a>
          </div>
        ))}
      </section>

      <footer className='flex space-x-6 pt-8 border-t border-neutral-800 w-full justify-center'>
        {socials.map((s, i) => (
          <a key={i} href={s.url} target='_blank' rel='noopener noreferrer' className='hover:text-yellow-400 transition'>
            {s.icon}
          </a>
        ))}
      </footer>
    </div>
  )
}
