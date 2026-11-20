import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from './Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Чекбокс с подписью, состояниями error и disabled и поддержкой нативных атрибутов input[type="checkbox"]. Используется, например, для выбора веса кофе в заказе.'
      }
    }
  },
  args: {
    label: 'Согласен с условиями',
    error: false,
    disabled: false
  },
  argTypes: {
    label: { control: 'text' },
    error: { control: 'boolean' },
    disabled: { control: 'boolean' }
  }
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {}

export const Checked: Story = {
  args: {
    label: 'Выбрано',
    defaultChecked: true
  }
}

export const Disabled: Story = {
  args: {
    label: 'Недоступно',
    disabled: true
  }
}

export const ErrorState: Story = {
  args: {
    label: 'Обязательное поле',
    error: true
  }
}

export const WeightOptions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Checkbox label="250 г" name="weight" defaultChecked />
      <Checkbox label="500 г" name="weight" />
      <Checkbox label="1 кг" name="weight" />
    </div>
  )
}
