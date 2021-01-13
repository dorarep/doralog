import { FC } from 'react'

export const SingleColumn: FC = ({ children }) => (
  <>
    <div>{children}</div>
    <style jsx>{`
      div {
        display: grid;
        height: 100vh;
        grid-template-rows: 62px 1fr 32px;
        gap: 2rem;
      }
    `}</style>
  </>
)
