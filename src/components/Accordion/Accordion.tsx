import { useState } from 'react'
import type { ReactNode } from 'react'
import styles from './Accordion.module.css'

export interface AccordionItem {
  title: string
  content: ReactNode
}

export interface AccordionProps {
  items: AccordionItem[]
  allowMultiple?: boolean
  defaultOpenIndexes?: number[]
  className?: string
}

export function Accordion({
  items,
  allowMultiple = false,
  defaultOpenIndexes = [],
  className = ''
}: AccordionProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>(defaultOpenIndexes)

  const toggleItem = (index: number) => {
    setOpenIndexes((prev) => {
      const isOpen = prev.includes(index)

      if (allowMultiple) {
        return isOpen ? prev.filter((i) => i !== index) : [...prev, index]
      }

      return isOpen ? [] : [index]
    })
  }

  return (
    <div className={[styles.accordion, className].filter(Boolean).join(' ')}>
      {items.map((item, index) => {
        const isOpen = openIndexes.includes(index)
        const contentId = `accordion-content-${index}`
        const triggerId = `accordion-trigger-${index}`

        return (
          <div key={index} className={styles.item}>
            <button
              id={triggerId}
              type="button"
              className={styles.trigger}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggleItem(index)}
            >
              <span>{item.title}</span>
              <span className={[styles.icon, isOpen ? styles.iconOpen : ''].join(' ')}>
                ▾
              </span>
            </button>
            <div
              id={contentId}
              role="region"
              aria-labelledby={triggerId}
              className={[styles.contentWrapper, isOpen ? styles.open : ''].join(' ')}
            >
              <div className={styles.content}>{item.content}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}