import styles from '@/styles/cityButton/index.module.scss'
import { LocationSvg } from '@/components/elements/LocationSvg/LocationSvg'
import { useStore } from 'effector-react'
import { $theme } from '@/context/theme'

export const CityButton = () => {
  const theme = useStore($theme)
  const darkModeClass = theme === 'dark' ? styles.dark_mode : ''

  return (
    <button className={styles.city}>
      <span className={`${styles.city__span} ${darkModeClass}`}>
        <LocationSvg />
      </span>
      <span className={`${styles.city__text} ${darkModeClass}`}>Москва</span>
    </button>
  )
}
