import { Box, Container } from '@mui/material'
import { ReactElement, ReactNode } from 'react'
type Props = {
  children: ReactNode
  footer?: ReactElement
  header?: ReactElement
}

export const BaseLayout = ({ children, footer, header }: Props) => {
  return (
    <Container
      sx={{
        '&': {
          height: '100dvh',
        },
        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows:
          (header ? 'auto ' : '') + '1fr' + (footer ? ' auto' : ''),
        height: '100vh',
      }}
    >
      {header}
      <Box>{children}</Box>
      {footer}
    </Container>
  )
}

type ContentProps = {
  children: ReactNode
  pb?: 0 | 2
  pl?: 0 | 1
  pr?: 0 | 1
  pt?: 0 | 2
}

const Content = ({
  children,
  pb = 2,
  pl = 1,
  pr = 1,
  pt = 2,
}: ContentProps) => {
  return (
    <Box pb={pb} pl={pl} pr={pr} pt={pt}>
      {children}
    </Box>
  )
}

BaseLayout.Content = Content
