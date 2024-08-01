import React, { useEffect } from 'react'

import styles from '@/styles/themeMode/index.module.scss'
import { useStore } from 'effector-react'
import { $theme } from '@/context/theme'
import { useTheme } from '@/hooks/useTheme'

export const ThemeMode = () => {
  const theme = useStore($theme)
  const { toggleTheme } = useTheme()

  useEffect(() => {
    document.body.classList.add(theme === 'dark' ? 'dark_mode' : 'body')
  }, [theme])

  const onChangeHandler = () => {
    toggleTheme()
    document.body.classList.toggle('dark_mode')
  }

  return (
    <div className={styles.theme}>
      <input
        className={styles.theme__input}
        type="checkbox"
        checked={theme === 'light'}
        onChange={onChangeHandler}
      />
    </div>
  )
}
