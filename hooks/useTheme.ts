import { useStore } from 'effector-react'
import { $theme, setTheme } from '@/context/theme'
import { useEffect } from 'react'

export const useTheme = () => {
  const theme = useStore($theme)

  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('mode', JSON.stringify('dark'))
      setTheme('dark')
    } else {
      localStorage.setItem('mode', JSON.stringify('light'))
      setTheme('light')
    }
  }

  useEffect(() => {
    const localTheme = JSON.parse(localStorage.getItem('mode') as string)

    if (localTheme) {
      setTheme(localTheme)
    }
  }, [theme])

  return { toggleTheme }
}
