import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Кнопка с тремя вариантами оформления (primary, secondary, outline) и тремя размерами (sm, md, lg). Поддерживает состояние disabled и стандартные атрибуты <button>.'
      }
    }
  },
  args: {
    children: 'Кнопка',
    onClick: fn(),
    disabled: false
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline']
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg']
    },
    disabled: { control: 'boolean' },
    onClick: { action: 'clicked' }
  }
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    children: 'Primary'
  }
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    children: 'Secondary'
  }
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'md',
    children: 'Outline'
  }
}

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
  args: {
    variant: 'primary'
  }
}

export const Variants: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="outline">Outline</Button>
    </div>
  ),
  args: {
    size: 'md'
  }
}

export const Disabled: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
      <Button {...args} variant="primary" disabled>Primary</Button>
      <Button {...args} variant="secondary" disabled>Secondary</Button>
      <Button {...args} variant="outline" disabled>Outline</Button>
    </div>
  ),
  args: {
    size: 'md'
  }
}