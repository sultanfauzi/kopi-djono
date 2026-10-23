import { config } from '../config'

export function Brand({ small = false }: { small?: boolean }) {
  const [first, ...rest] = config.name.split(' ')

  return (
    <a href="#beranda" className={`brand ${small ? 'brand-small' : ''}`} aria-label={`${config.name}, ke beranda`}>
      <span className="brand-type">{first}</span>
      <span className="brand-cup">☕</span>
      <span className="brand-type">{rest.join(' ')}</span>
    </a>
  )
}
