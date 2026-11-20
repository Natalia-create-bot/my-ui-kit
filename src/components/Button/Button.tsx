import type { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
}

export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  type = 'button',
  children,
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    styles[size],
    disabled ? styles.disabled : '',
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {children}
    </button>
  )
}