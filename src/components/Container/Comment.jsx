import Image from "../Image";
import profilerImg from './../../assets/img/profiler.jpeg'

export default function Comment() {
  return (
    <div className="p-5 bg-zinc-800 w-full space-y-4 mb-6 rounded-md">
      <header className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-3">
          <Image
            url={profilerImg}
            alt="Foto de Perfil"
          />
          <div>
            <p className="text-md font-semibold">Rejman Nascimento</p>
            <p className="text-sm text-zinc-500">Dev Fullstack</p>
          </div>
        </div>
        <p className="flex justify-end text-sm text-zinc-500">Públicado há 1h atrás</p>
      </header>
      <main className="text-sm space-y-4 border-b-2">
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa.
          É um projeto que fiz no NLW Return, evento da Rocketseat.
          O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉 jane.design / doctorcare</p>
        <p>#novoprojeto #nlw #rocketseat</p>
      </main>
      <footer className="space-y-3">
        <h4 className="font-bold">Deixei seu feedback</h4>
        <textarea
          className="rounded-md outline-none border-2 border-green-800 bg-zinc-900 w-full resize-none p-2 text-sm"
          name="feedback"
          id="feedback"
          placeholder="Escreva um comentário..."
        />
        <button
          className="p-2 w-32 rounded-md bg-green-700 border-0"
        >
          Publicar
        </button>
      </footer>
    </div>
  )
}
