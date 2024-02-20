export default function Container({ children }) {
  return (
    <div className="w-full flex justify-center">
      <div className="pt-6 px-24 flex max-w-screen-xl gap-6">
        {children}
      </div>
    </div>
  )
}
