import { Button } from '../Button'
import styles from './ProductCard.module.css'

export interface ProductCardProps {
  image: string
  title: string
  price: number | string
  description: string
  onAddToCart?: () => void
  buttonLabel?: string
}

export function ProductCard({
  image,
  title,
  price,
  description,
  onAddToCart,
  buttonLabel = 'В корзину'
}: ProductCardProps) {
  const formattedPrice =
    typeof price === 'number'
      ? new Intl.NumberFormat('ru-RU', { style: 'currency', currency: 'RUB' }).format(price)
      : price

  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={title} className={styles.image} loading="lazy" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.footer}>
          <span className={styles.price}>{formattedPrice}</span>
          <Button variant="primary" size="sm" onClick={onAddToCart}>
            {buttonLabel}
          </Button>
        </div>
      </div>
    </article>
  )
}