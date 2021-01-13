import { ComponentProps } from 'react'

import { ExternalLink } from './index'

export default {
  title: 'buttons/ExternalLink',
  component: ExternalLink,
  argTypes: {
    children: { control: 'text' },
  },
}

export const Default = (props: ComponentProps<typeof ExternalLink>) => <ExternalLink {...props} />
