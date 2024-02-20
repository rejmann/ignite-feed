import { PencilLine } from '@phosphor-icons/react'
import Image from '../Image'

export default function Profiler({
  name,
  office,
  profilerPhoto,
  profilerBackgroundPhoto
}) {
  return (
    <aside className="max-w-64 h-80 rounded-md bg-zinc-800">
      <div className="h-20 overflow-hidden">
        <img
          className="rounded-md border-0"
          src={profilerBackgroundPhoto}
          alt="Plano de Fundo"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 mb-8">
        <Image
          url={profilerPhoto}
          alt="Foto de Perfil"
          className="relative bottom-5"
        />
        <p className="text-xl font-semibold">
          {name}
        </p>
        <p className="text-sm text-zinc-500">
          {office}
        </p>
      </div>
      <div className="border-t-2 border-zinc-500 flex justify-center items-center">
        <button className="profiler-button">
          <PencilLine size={20} />
          Editar Perfil
        </button>
      </div>
    </aside>
  )
}
