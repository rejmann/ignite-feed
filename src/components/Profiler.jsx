import { PencilLine } from '@phosphor-icons/react'
import Avatar from './Avatar'
import Line from './Line'

export default function Profiler({
  name,
  role,
  avatarUrl,
  backgroundUrl
}) {
  return (
    <aside className="max-w-60 h-72 rounded-md bg-i-gray-800 space-y-2">
      <div className="h-20 overflow-hidden">
        <img
          className="rounded-md border-0"
          src={backgroundUrl}
          alt="Plano de Fundo"
        />
      </div>
      <div className="flex flex-col justify-center items-center relative gap-2">
        <Avatar
          url={avatarUrl}
          alt="Foto de Perfil"
          className="-m-10 mb-2"
          hasBorder
        />
        <p className="text-xl font-semibold">
          {name}
        </p>
        <p className="text-sm text-zinc-500">
          {role}
        </p>
      </div>
      <Line />
      <div className="flex flex-col justify-center items-center relative">
        <button className="py-3 px-6 flex gap-3 border border-i-green hover:bg-i-green-light rounded -mb-20">
          <PencilLine size={20} />
          Editar Perfil
        </button>
      </div>
    </aside>
  )
}
