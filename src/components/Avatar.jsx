export default function Avatar({ url, alt, className, hasBorder = false }) {
  return (
    <div className={`w-16 h-16 ` + className}>
      <img
        className={`rounded-md ` + (hasBorder && 'border-2 border-i-green')}
        src={url}
        alt={alt}
      />
    </div>
  )
}
