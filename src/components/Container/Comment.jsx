import Image from "../Image";

export default function Comment({ name, office, profilerPhoto }) {
  return (
    <div className="p-5 bg-zinc-800 w-full space-y-4 mb-6 rounded-md">
      <header className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-3">
          <Image
            url={profilerPhoto}
            alt="Foto de Perfil"
          />
          <div>
            <p className="text-md font-semibold">
              {name}
            </p>
            <p className="text-sm text-zinc-500">
              {office}
            </p>
          </div>
        </div>
        <p className="flex justify-end text-sm text-zinc-500">Públicado há 1h atrás</p>
      </header>
      <main className="text-sm space-y-4">
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa.
          É um projeto que fiz no NLW Return, evento da Rocketseat.
          O nome do projeto é DoctorCare 🚀
        </p>
        <p className="text-green-800 font-bold">👉 jane.design / doctorcare</p>
        <p className="text-green-800 font-bold">#novoprojeto #nlw #rocketseat</p>
      </main>
      <footer className="border-t-2 border-zinc-500 space-y-3">
        <h4 className="font-bold mt-4">Deixei seu feedback</h4>
        <textarea
          className="h-20 rounded-md outline-none border-2 border-green-800 bg-zinc-900 w-full resize-none p-2 text-sm"
          name="feedback"
          id="feedback"
          placeholder="Escreva um comentário..."
        />
        <button className="p-2 w-32 rounded-md bg-green-700 border-0">
          Publicar
        </button>
      </footer>
    </div>
  )
}
