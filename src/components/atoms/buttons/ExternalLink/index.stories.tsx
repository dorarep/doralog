import { ExternalLink } from './index'
import { ComponentProps } from 'react'

export default {
  title: 'buttons/ExternalLink',
  component: ExternalLink,
  argTypes: {
    children: { control: 'text' },
  },
}

export const Default = (props: ComponentProps<typeof ExternalLink>) => <ExternalLink {...props} />
