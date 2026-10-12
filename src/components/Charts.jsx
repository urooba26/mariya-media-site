import { motion, useReducedMotion } from 'framer-motion'

// Responsive SVG area+line chart. series: number[], labels: string[].
export function LineChart({ series, labels, color = '#F6B620', height = 220, label = 'Growth chart' }) {
  const reduce = useReducedMotion()
  const W = 600
  const H = height
  const pad = { t: 16, r: 12, b: 28, l: 12 }
  const max = Math.max(...series)
  const min = Math.min(...series)
  const range = max - min || 1
  const pts = series.map((v, i) => {
    const x = pad.l + (i / (series.length - 1)) * (W - pad.l - pad.r)
    const y = pad.t + (1 - (v - min) / range) * (H - pad.t - pad.b)
    return [x, y]
  })
  const path = pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)},${y.toFixed(1)}`).join(' ')
  const area = `${path} L${pts[pts.length - 1][0].toFixed(1)},${H - pad.b} L${pts[0][0].toFixed(1)},${H - pad.b} Z`
  const gid = `g-${color.replace('#', '')}-${height}`

  return (
    <figure className="card p-4 sm:p-6" role="img" aria-label={label}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height }} preserveAspectRatio="none">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.35" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* gridlines */}
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1={pad.l} x2={W - pad.r} y1={pad.t + f * (H - pad.t - pad.b)} y2={pad.t + f * (H - pad.t - pad.b)} stroke="rgba(255,255,255,.06)" strokeDasharray="4 6" />
        ))}
        <motion.path
          d={area}
          fill={`url(#${gid})`}
          initial={reduce ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        />
        <motion.path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduce ? false : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
        {pts.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="3.5"
            fill="#08070A"
            stroke={color}
            strokeWidth="2"
            initial={reduce ? false : { opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 + i * 0.06 }}
          />
        ))}
        {labels?.map((l, i) => (
          <text
            key={l + i}
            x={pad.l + (i / (labels.length - 1)) * (W - pad.l - pad.r)}
            y={H - 8}
            textAnchor="middle"
            fontSize="11"
            fill="rgba(255,255,255,.35)"
          >
            {l}
          </text>
        ))}
      </svg>
      <figcaption className="sr-only">{label}</figcaption>
    </figure>
  )
}

// Before/after comparison rows with animated bars.
export function BeforeAfter({ rows }) {
  const reduce = useReducedMotion()
  return (
    <div className="card overflow-hidden">
      <div className="grid grid-cols-3 border-b border-white/[0.07] bg-white/[0.03] px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-500 sm:px-6">
        <span>Metric</span>
        <span className="text-center">Before</span>
        <span className="text-right text-gold-400">After</span>
      </div>
      {rows.map(([metric, before, after], i) => (
        <div key={metric} className="grid grid-cols-3 items-center border-b border-white/[0.05] px-5 py-4 last:border-0 sm:px-6">
          <span className="text-sm text-zinc-300">{metric}</span>
          <span className="text-center font-display text-sm text-zinc-500 line-through decoration-tik-pink/60">{before}</span>
          <span className="text-right font-display text-base font-bold text-gradient-gold sm:text-lg">{after}</span>
        </div>
      ))}
    </div>
  )
}
