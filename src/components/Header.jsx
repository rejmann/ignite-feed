import logoIgniteFeed from './../assets/img/logo-ignite-feed.svg'

export default function Header() {
  return (
    <header className="bg-i-gray-800 w-full h-20 flex justify-center items-center py-11">
      <img className="h-10 md:h-14" src={logoIgniteFeed} alt="Logo Ignite Feed" />
      <span className="hidden md:block font-semibold text-2xl mx-2">Ignite Feed</span>
    </header>
  )
}
