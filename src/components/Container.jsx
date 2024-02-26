export default function Container({ children }) {
  return (
    <div className="w-full flex gap-6 py-6 px-64">
      {children}
    </div>
  )
}
