import Avatar from "./Avatar";
import Comment from "./Comment";
import Line from "./Line";

export default function Post({ name, role, avatarUrl }) {
  return (
    <div className="p-10 space-y-8 bg-i-gray-800 w-full mb-6 rounded-md">
      <header className="flex justify-between items-center">
        <div className="flex justify-start items-center gap-3">
          <Avatar
            url={avatarUrl}
            alt="Foto de Perfil"
            hasBorder
          />
          <div>
            <p className="text-md font-semibold">
              {name}
            </p>
            <p className="text-sm text-i-gray-400">
              {role}
            </p>
          </div>
        </div>
        <p className="flex justify-end text-sm text-i-gray-400">Públicado há 1h atrás</p>
      </header>
      <main className="text-sm space-y-6">
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa.
          É um projeto que fiz no NLW Return, evento da Rocketseat.
          O nome do projeto é DoctorCare 🚀
        </p>
        <p className="text-i-green-light font-bold">👉 jane.design / doctorcare</p>
        <p className="text-i-green-light font-bold">#novoprojeto #nlw #rocketseat</p>
      </main>
      <Line />
      <footer className="space-y-6">
        <h4 className="font-bold mt-4">Deixei seu feedback</h4>
        <textarea
          className="h-28 rounded-md outline-none border-2 border-i-green bg-i-gray-900 w-full resize-none p-3 text-sm"
          name="feedback"
          id="feedback"
          placeholder="Escreva um comentário..."
        />
        <button className="p-2 w-32 rounded-md bg-i-green hover:bg-i-green-light border-0">
          Publicar
        </button>
      </footer>
      <Comment
          name="Rejman Nascimento"
          role="Dev Fullstack"
      />
    </div>
  )
}
