# my-ui-kit-kolmykova

Небольшая React-библиотека UI-компонентов на TypeScript, собранная через Vite и документированная в Storybook.

## Возможности

- Готовые компоненты: `Button`, `Input`, `Checkbox`, `Accordion`, `Modal`, `ProductCard`
- Сборка библиотеки в форматах ESM и CommonJS
- Экспорт типов TypeScript (`.d.ts`)
- CSS-переменные для стилизации и поддержка светлой/тёмной темы (`data-theme`)
- CSS Modules для изоляции стилей компонентов

## Установка

```bash
npm install my-ui-kit-kolmykova
```

### Peer-зависимости

Библиотека ожидает, что в проекте уже установлены:

- `react` `^18.0.0 || ^19.0.0`
- `react-dom` `^18.0.0 || ^19.0.0`

## Быстрый старт

Подключите стили библиотеки и используйте компоненты:

```tsx
import 'my-ui-kit-kolmykova/style.css'
import { Button, Input } from 'my-ui-kit-kolmykova'

export function Example() {
  return (
    <div>
      <Input label="Email" placeholder="user@example.com" />
      <Button variant="primary">Отправить</Button>
    </div>
  )
}
```

## Темизация

Стили основаны на CSS-переменных, объявленных в `:root`. Для тёмной темы установите атрибут `data-theme="dark"` на `html`/любой родительский элемент:

```html
<html data-theme="dark">
  ...
</html>
```

```ts
document.documentElement.setAttribute('data-theme', 'light') // или 'dark'
```

Основные переменные: `--ui-color-bg`, `--ui-color-text`, `--ui-color-primary`, `--ui-color-border`, `--ui-radius-md` и др. Их можно переопределить в своём CSS.

## Компоненты

### Button

Кнопка с вариантами оформления и размерами.

```tsx
import { Button } from 'my-ui-kit-kolmykova'

<Button variant="primary" size="md">Сохранить</Button>
<Button variant="secondary">Отмена</Button>
<Button variant="outline" disabled>Недоступно</Button>
```

**Props:** наследует атрибуты `<button>` (`ButtonHTMLAttributes<HTMLButtonElement>`)

| Prop | Тип | По умолчанию | Описание |
| --- | --- | --- | --- |
| `variant` | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | Вариант оформления |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Размер |
| `disabled` | `boolean` | `false` | Отключенное состояние |
| `type` | `string` | `'button'` | Тип кнопки |

### Input

Текстовое поле с подписью и состоянием ошибки.

```tsx
import { Input } from 'my-ui-kit-kolmykova'

<Input label="Имя" placeholder="Введите имя" />
<Input label="Email" error />
```

**Props:** наследует атрибуты `<input>` (кроме `size`)

| Prop | Тип | По умолчанию | Описание |
| --- | --- | --- | --- |
| `label` | `string` | — | Подпись поля |
| `error` | `boolean` | `false` | Состояние ошибки (также показывает текст «Некорректное значение») |
| `disabled` | `boolean` | `false` | Отключенное состояние |
| `id` | `string` | авто | Идентификатор поля; при отсутствии генерируется автоматически |

### Checkbox

Чекбокс с подписью.

```tsx
import { Checkbox } from 'my-ui-kit-kolmykova'

<Checkbox label="Принимаю условия" />
<Checkbox label="С ошибкой" error />
```

**Props:** наследует атрибуты `<input>` (кроме `type`, `size`)

| Prop | Тип | По умолчанию | Описание |
| --- | --- | --- | --- |
| `label` | `ReactNode` | — | Подпись чекбокса |
| `error` | `boolean` | `false` | Состояние ошибки |
| `disabled` | `boolean` | `false` | Отключенное состояние |
| `id` | `string` | авто | Идентификатор; при отсутствии генерируется автоматически |

### Accordion

Аккордеон со списком раскрываемых секций.

```tsx
import { Accordion } from 'my-ui-kit-kolmykova'

const items = [
  { title: 'Секция 1', content: 'Содержимое первой секции' },
  { title: 'Секция 2', content: <p>Можно передать JSX</p> }
]

<Accordion items={items} />
<Accordion items={items} allowMultiple defaultOpenIndexes={[0]} />
```

**Props:**

| Prop | Тип | По умолчанию | Описание |
| --- | --- | --- | --- |
| `items` | `AccordionItem[]` | — | Элементы аккордеона (`{ title: string; content: ReactNode }`) |
| `allowMultiple` | `boolean` | `false` | Разрешить открытие нескольких секций одновременно |
| `defaultOpenIndexes` | `number[]` | `[]` | Индексы секций, открытых по умолчанию |
| `className` | `string` | `''` | Дополнительный CSS-класс контейнера |

### Modal

Модальное окно, рендерится через портал в `document.body`.

```tsx
import { useState } from 'react'
import { Modal, Button } from 'my-ui-kit-kolmykova'

export function Example() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Открыть</Button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title="Заголовок">
        Контент модального окна
      </Modal>
    </>
  )
}
```

**Props:**

| Prop | Тип | Описание |
| --- | --- | --- |
| `isOpen` | `boolean` | Открыто ли окно |
| `onClose` | `() => void` | Обработчик закрытия |
| `title` | `string` | Заголовок (необязательно) |
| `children` | `ReactNode` | Содержимое окна |

Поведение: закрывается по клику на оверлей и по клавише `Escape`, при открытии блокируется прокрутка `body`.

### ProductCard

Карточка товара с изображением, описанием, ценой и кнопкой действия.

```tsx
import { ProductCard } from 'my-ui-kit-kolmykova'

<ProductCard
  image="/img/product.jpg"
  title="Товар"
  price={1990}
  description="Короткое описание товара"
  buttonLabel="В корзину"
  onAddToCart={() => console.log('added')}
/>
```

**Props:**

| Prop | Тип | По умолчанию | Описание |
| --- | --- | --- | --- |
| `image` | `string` | — | URL изображения |
| `title` | `string` | — | Название товара |
| `price` | `number \| string` | — | Цена; число форматируется как валюта RUB (`ru-RU`) |
| `description` | `string` | — | Описание |
| `onAddToCart` | `() => void` | — | Обработчик клика по кнопке |
| `buttonLabel` | `string` | `'В корзину'` | Текст кнопки |

## Экспорты

```ts
import {
  Button,
  Input,
  Checkbox,
  Accordion,
  Modal,
  ProductCard
} from 'my-ui-kit-kolmykova'

import type {
  ButtonProps,
  InputProps,
  CheckboxProps,
  AccordionProps,
  AccordionItem,
  ModalProps,
  ProductCardProps
} from 'my-ui-kit-kolmykova'
```

Стили: `my-ui-kit-kolmykova/style.css`

## Разработка

```bash
# установка зависимостей
npm install

# запуск Vite dev-сервера
npm run dev

# запуск Storybook (порт 6006)
npm run storybook

# сборка библиотеки
npm run build

# предпросмотр production-сборки Vite
npm run preview

# статическая сборка Storybook
npm run build-storybook
```

Сборка библиотеки выполняет `tsc` и `vite build`, результат помещается в каталог `dist/`.

## Структура проекта

```text
src/
  components/
    Accordion/
    Button/
    Checkbox/
    Input/
    Modal/
    ProductCard/
  styles/
    index.css        # CSS-переменные и базовые стили
  index.ts           # точка входа библиотеки
.storybook/          # конфигурация Storybook
```

## Лицензия

Лицензия не указана в `package.json`.
