// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Test> = (args) => {
//   return <Test {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Test from './Test'

export const generated = () => {
  return <Test />
}

export default {
  title: 'Components/Test',
  component: Test,
} as ComponentMeta<typeof Test>
