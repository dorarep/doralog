import { ComponentProps } from 'react'

import { SingleColumn } from './index'

export default {
  title: 'layouts/SingleColumn',
  component: SingleColumn,
}

export const Default = (props: ComponentProps<typeof SingleColumn>) => (
  <SingleColumn {...props}>Contents</SingleColumn>
)
