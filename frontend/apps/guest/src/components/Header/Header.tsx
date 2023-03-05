import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar,
  AppBarProps,
  IconButton,
  IconButtonProps,
  SxProps,
  Toolbar,
  Typography,
  TypographyProps,
} from '@mui/material'
import React, { ReactElement } from 'react'

type HeaderProps = {
  leftElement?: ReactElement
  position?: AppBarProps['position']
  rightElement?: ReactElement
  title: ReactElement<TitleProps> | string
}

export const Header = ({
  leftElement,
  position = 'sticky',
  rightElement,
  title,
}: HeaderProps) => {
  return (
    <AppBar
      color={'transparent'}
      position={position}
      sx={{
        boxShadow: 'none',
        px: 1,
        py: 2,
      }}
    >
      <Toolbar disableGutters>
        {leftElement}
        {typeof title === 'string' ? <Header.Title title={title} /> : title}
        {rightElement}
      </Toolbar>
    </AppBar>
  )
}

type TitleProps = {
  color?: TypographyProps['color']
  title: string
  variant?: TypographyProps['variant']
}

const Title = ({ color, title, variant = 'h6' }: TitleProps) => {
  return (
    <Typography color={color} variant={variant}>
      {title}
    </Typography>
  )
}

Header.Title = Title

type MenuButtonProps = {
  edge?: IconButtonProps['edge']
  sx?: SxProps
}
const MenuButton = ({ edge = 'start', sx }: MenuButtonProps) => {
  return (
    <IconButton aria-label={'menu'} edge={edge} sx={sx}>
      <MenuIcon />
    </IconButton>
  )
}

Header.MenuButton = MenuButton
