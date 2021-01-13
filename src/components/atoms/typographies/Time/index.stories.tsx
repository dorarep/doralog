import { Time } from './index'
import { ComponentProps } from 'react'

export default {
  title: 'typographies/Time',
  component: Time,
  argTypes: {
    timestamp: {
      defaultValue: Date.now().valueOf(),
    },
  },
}

export const Default = (props: ComponentProps<typeof Time>) => <Time timestamp={0} {...props} />
