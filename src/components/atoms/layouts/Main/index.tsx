import { FC } from 'react'

export const Main: FC = ({ children }) => (
  <>
    <main>{children}</main>
    <style jsx>{`
      main {
        width: 100%;
        height: 100%;
        max-width: var(--content-width);
        margin-right: auto;
        margin-left: auto;
      }
    `}</style>
  </>
)
