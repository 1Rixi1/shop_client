import { createDomain } from 'effector'

export const theme = createDomain()

export const setTheme = theme.createEvent<string>()

export const $theme = theme
  .createStore<string>('light')
  .on(setTheme, (_, mode) => mode)
