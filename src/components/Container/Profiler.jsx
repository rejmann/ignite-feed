import { PencilLine } from '@phosphor-icons/react'
import profilerBackgroundImg from './../../assets/img/profiler-background.jpg'
import profilerImg from './../../assets/img/profiler.jpeg'

export default function Profiler() {
  return (
    <aside className="w-72 h-80 rounded-md bg-zinc-800">
      <div className="h-20 w-full overflow-hidden">
        <img
          className="rounded-md border-0"
          src={profilerBackgroundImg}
          alt="Plano de Fundo"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-2 mb-8">
        <img
          className="w-16 relative bottom-5 border-2 border-green-700 rounded-md"
          src={profilerImg}
          alt="Foto de Perfil"
        />
        <p className="text-xl">
          <strong>Rejman Nascimento</strong>
        </p>
        <p className="text-sm text-zinc-500">Dev Fullstack</p>
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
