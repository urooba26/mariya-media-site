// Eagle mark cropped from the brand sheet + wordmark. Not a link itself —
// wrap with <Link> where navigation is needed.
export default function Logo({ size = 'md' }) {
  const dims = size === 'lg' ? 'h-14 w-14' : 'h-10 w-10'
  const word = size === 'lg' ? 'text-2xl' : 'text-lg'
  return (
    <span className="flex items-center gap-3">
      <span
        className={`relative ${dims} shrink-0 overflow-hidden rounded-xl border border-gold-500/30 bg-ink-800 shadow-glow-sm`}
        aria-hidden="true"
      >
        <img
          src={`${import.meta.env.BASE_URL}logo.jpg`}
          alt=""
          className="absolute -left-2.5 -top-2.5 h-[calc(100%+20px)] w-[calc(100%+20px)] object-cover"
        />
      </span>
      <span className={`flex flex-col font-display font-bold leading-none tracking-wide ${word}`}>
        <span className="text-white">MARIYA</span>
        <span className="mt-0.5 text-[9px] font-medium tracking-[0.35em] text-gold-500">MEDIA LTD</span>
      </span>
    </span>
  )
}
