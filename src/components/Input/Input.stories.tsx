import type { Meta, StoryObj } from '@storybook/react'
import { Input } from './Input'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Поле ввода с необязательной подписью, состояниями error и disabled. Ошибка подсвечивает поле и показывает текст «Некорректное значение». Принимает все стандартные атрибуты <input>.'
      }
    }
  },
  args: {
    label: 'Email',
    placeholder: 'Введите email',
    error: false,
    disabled: false
  },
  argTypes: {
    label: { control: 'text' },
    placeholder: { control: 'text' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {}

export const WithPlaceholder: Story = {
  args: {
    label: 'Имя пользователя',
    placeholder: 'Например, ivan_ivanov'
  }
}

export const ErrorState: Story = {
  args: {
    label: 'Пароль',
    placeholder: 'Введите пароль',
    error: true,
    defaultValue: '123'
  }
}

export const Disabled: Story = {
  args: {
    label: 'Телефон',
    placeholder: '+7 (___) ___-__-__',
    disabled: true
  }
}

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16, maxWidth: 360 }}>
      <Input label="Обычное поле" placeholder="Введите текст" />
      <Input label="С ошибкой" placeholder="Введите текст" error defaultValue="Неверно" />
      <Input label="Отключённое" placeholder="Недоступно" disabled />
    </div>
  )
}