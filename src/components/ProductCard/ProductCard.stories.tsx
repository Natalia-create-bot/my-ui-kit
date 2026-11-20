import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ProductCard } from './ProductCard'

const meta: Meta<typeof ProductCard> = {
  title: 'Components/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Карточка товара с изображением, названием, описанием и ценой (число форматируется как рубли, строку можно передать готовой). Кнопкой управляет onAddToCart, её текст задаётся пропсом buttonLabel.'
      }
    }
  },
  args: {
    image:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80',
    title: 'Умные часы',
    price: 12990,
    description: 'Стильные умные часы с отслеживанием активности, уведомлениями и длительным временем работы.',
    onAddToCart: fn()
  },
  argTypes: {
    price: { control: 'text' },
    onAddToCart: { action: 'add-to-cart' }
  }
}

export default meta
type Story = StoryObj<typeof ProductCard>

export const Default: Story = {}

export const WithStringPrice: Story = {
  args: {
    title: 'Беспроводные наушники',
    price: '9 990 ₽',
    image:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    description: 'Компактные наушники с шумоподавлением и чистым звуком для повседневного использования.'
  }
}

export const CatalogExample: Story = {
  render: (args) => (
    <div style={{ display: 'grid', gap: 16, gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
      <ProductCard {...args} />
      <ProductCard
        {...args}
        title="Камера"
        price={45990}
        image="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
        description="Лёгкая камера для путешествий и качественной съёмки в любых условиях."
      />
    </div>
  )
}