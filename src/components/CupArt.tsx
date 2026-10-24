import type { CSSProperties } from 'react'

export function CupArt({ index }: { index: number }) {
  const color = index % 2 === 0 ? 'var(--accent)' : 'var(--cup-alt)'

  return (
    <div className="cup-art" style={{ '--cup-color': color } as CSSProperties} aria-hidden="true">
      <span className="cup-ice ice-one" /><span className="cup-ice ice-two" />
      <span className="cup-sleeve">3/4</span><span className="cup-straw" />
    </div>
  )
}
