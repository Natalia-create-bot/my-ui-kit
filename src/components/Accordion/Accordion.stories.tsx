import type { Meta, StoryObj } from '@storybook/react'
import { Accordion } from './Accordion'

const items = [
  {
    title: 'Что такое UI Kit?',
    content: 'UI Kit — это набор переиспользуемых компонентов интерфейса, стилей и правил для быстрой разработки продуктов.'
  },
  {
    title: 'Можно ли открывать несколько секций?',
    content: 'Да, для этого используйте пропс allowMultiple. В режиме по умолчанию открыта только одна секция.'
  },
  {
    title: 'Поддерживается ли темизация?',
    content: 'Компоненты используют CSS-переменные, поэтому легко переключаются между светлой и тёмной темой.'
  }
]

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Аккордеон со списком секций {title, content}. По умолчанию открыта только одна секция; пропс allowMultiple разрешает несколько, defaultOpenIndexes задаёт изначально открытые.'
      }
    }
  },
  args: {
    items,
    allowMultiple: false
  },
  argTypes: {
    allowMultiple: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {}

export const AllowMultiple: Story = {
  args: {
    allowMultiple: true,
    defaultOpenIndexes: [0, 2]
  }
}

export const WithDefaultOpen: Story = {
  args: {
    allowMultiple: false,
    defaultOpenIndexes: [1]
  }
}