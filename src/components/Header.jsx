import logoIgniteFeed from './../assets/img/logo-ignite-feed.svg'

export default function Header() {
  return (
    <header className="bg-zinc-800 w-full h-20 flex justify-center items-center py-11">
      <img className="h-14" src={logoIgniteFeed} alt="Logo Ignite Feed" />
      <span className="text-white text-2xl mx-2">Ignite Feed</span>
    </header>
  )
}
