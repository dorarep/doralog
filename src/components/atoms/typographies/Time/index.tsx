import { FC } from 'react'
import fnsFormat from 'date-fns/format'

type Props = {
  timestamp: number
  format?: string
}

export const Time: FC<Props> = ({ timestamp, format = 'yyyy-MM-dd' }) => {
  const date = new Date(timestamp)

  return (
    <>
      <time dateTime={date.toISOString()}>{fnsFormat(date, format)}</time>
      <style jsx>{`
        time {
          color: var(--dark-gray);
          font-size: 0.9rem;
        }
      `}</style>
    </>
  )
}
