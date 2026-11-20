import { useId } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'
import styles from './Checkbox.module.css'

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: ReactNode
  error?: boolean
}

export function Checkbox({
  label,
  error = false,
  disabled = false,
  id,
  className = '',
  ...props
}: CheckboxProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  const wrapperClasses = [
    styles.wrapper,
    error ? styles.error : '',
    disabled ? styles.disabled : '',
    className
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={wrapperClasses}>
      <input
        id={inputId}
        type="checkbox"
        className={styles.input}
        disabled={disabled}
        aria-invalid={error || undefined}
        {...props}
      />
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}
    </div>
  )
}
