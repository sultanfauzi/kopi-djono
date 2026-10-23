import type { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost'
}

/** Small local shadcn-style button primitive, styled by the app theme. */
export function Button({ variant = 'default', className = '', ...props }: ButtonProps) {
  return <button className={`button ${variant === 'default' ? 'button-dark' : variant === 'outline' ? 'button-outline' : 'button-ghost'} ${className}`.trim()} {...props} />
}
