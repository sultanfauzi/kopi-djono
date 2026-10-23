import type { CSSProperties } from 'react'

const cupColors = ['#c47a43', '#7d9a75', '#8d5941', '#d29255', '#d87343', '#88a276']

export function CupArt({ index }: { index: number }) {
  const color = cupColors[index % cupColors.length]

  return (
    <div className="cup-art" style={{ '--cup-color': color } as CSSProperties} aria-hidden="true">
      <span className="cup-ice ice-one" /><span className="cup-ice ice-two" />
      <span className="cup-sleeve">DJ</span><span className="cup-straw" />
    </div>
  )
}
