import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Модальное окно закрывается по клику на оверлей, по клавише Escape и по кнопке закрытия.'
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Открыть модальное окно</Button>
        <Modal {...args} isOpen={open} onClose={() => setOpen(false)} />
      </div>
    )
  },
  args: {
    title: 'Подтверждение действия',
    children: (
      <div style={{ display: 'grid', gap: 12 }}>
        <p style={{ margin: 0 }}>
          Это пример модального окна. Нажмите на оверлей, кнопку закрытия или клавишу Escape, чтобы закрыть его.
        </p>
      </div>
    )
  }
}

export const WithoutTitle: Story = {
  render: (args) => {
    const [open, setOpen] = useState(true)

    return (
      <div>
        <Button onClick={() => setOpen(true)}>Показать снова</Button>
        <Modal {...args} isOpen={open} onClose={() => setOpen(false)} />
      </div>
    )
  },
  args: {
    children: <p style={{ margin: 0 }}>Контент модального окна без заголовка.</p>
  }
}