export default function Image({ url, alt }) {
  return (
    <div className="w-16 relative bottom-5 border-2 border-green-700 rounded-md">
      <img
        className="border-2 border-zinc-900 rounded-md"
        src={url}
        alt={alt}
      />
    </div>
  )
}
