import { useId } from 'react'
import type { InputHTMLAttributes } from 'react'
import styles from './Input.module.css'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string
  error?: boolean
}

export function Input({
  label,
  placeholder,
  error = false,
  disabled = false,
  id,
  className = '',
  ...props
}: InputProps) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const describedById = error ? `${inputId}-error` : undefined

  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(' ')}>
      {label && (
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={[
          styles.input,
          error ? styles.error : '',
          disabled ? styles.disabled : ''
        ]
          .filter(Boolean)
          .join(' ')}
        placeholder={placeholder}
        disabled={disabled}
        aria-invalid={error || undefined}
        aria-describedby={describedById}
        {...props}
      />
      {error && (
        <span id={describedById} className={styles.errorText}>
          Некорректное значение
        </span>
      )}
    </div>
  )
}