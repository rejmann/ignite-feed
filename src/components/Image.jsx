export default function Image({ url, alt, className }) {
  return (
    <div className={`w-16 h-16 border-2 border-green-700 rounded-md ` + className}>
      <img
        className="border-2 border-zinc-900 rounded-md"
        src={url}
        alt={alt}
      />
    </div>
  )
}
