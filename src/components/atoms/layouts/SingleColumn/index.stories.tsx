import { SingleColumn } from './index'
import { ComponentProps } from 'react'

export default {
  title: 'layouts/SingleColumn',
  component: SingleColumn,
}

export const Default = (props: ComponentProps<typeof SingleColumn>) => (
  <SingleColumn {...props}>Contents</SingleColumn>
)
