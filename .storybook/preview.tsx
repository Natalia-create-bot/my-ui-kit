import React from 'react'
import type { Decorator, Preview } from '@storybook/react'
import '../src/styles/index.css'

const withTheme: Decorator = (Story, context) => {
  const theme = (context.globals.theme as string) || 'light'

  document.documentElement.setAttribute('data-theme', theme)
  document.body.style.background = 'var(--ui-color-bg)'
  document.body.style.color = 'var(--ui-color-text)'
  document.body.style.margin = '0'

  return (
    <div style={{ padding: '24px', background: 'var(--ui-color-bg)', minHeight: '100vh' }}>
      <Story />
    </div>
  )
}

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Глобальная тема оформления',
      toolbar: {
        title: 'Theme',
        icon: 'mirror',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' }
        ],
        dynamicTitle: true
      }
    }
  },
  initialGlobals: {
    theme: 'light'
  },
  decorators: [withTheme],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'fullscreen'
  }
}

export default preview