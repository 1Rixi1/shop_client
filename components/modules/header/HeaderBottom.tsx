import styles from '@/styles/header/index.module.scss'
import Link from 'next/link'
import { SearchSvg } from '@/components/elements/searchSvg/SearchSvg'
import { $theme } from '@/context/theme'
import { useStore } from 'effector-react'
import { SearchInput } from '@/components/elements/header/SearchInput'
import { ThemeMode } from '@/components/elements/themeMode/ThemeMode'
import ShoppingCartPopup from '@/components/modules/header/ShoppingCartPopup'
import { useMediaQuery } from '@/utils/useMediaQuery'

export const HeaderBottom = () => {
  const theme = useStore($theme)

  const darkModeClass = theme === 'dark' ? styles.dark_mode : ''

  const { isMedia: isMedia950 } = useMediaQuery(950)

  return (
    <div className={styles.header__bottom}>
      <div className={`container ${styles.header__bottom__container}`}>
        <h1 className={styles.header__logo}>
          <Link href="/dashboard" passHref legacyBehavior>
            <a className={styles.header__logo__link}>
              <img src="/img/logo.svg" alt="logo" />
              <span
                className={`${styles.header__logo__link__text} ${darkModeClass}`}
              >
                Детали для газовых котлов
              </span>
            </a>
          </Link>
        </h1>
        <div className={styles.header__search}>
          <SearchInput />
          <button className={`${styles.header__search__btn} ${darkModeClass}`}>
            <span>
              <SearchSvg />
            </span>
          </button>
        </div>
        <div className={styles.header__shopping_cart}>
          {isMedia950 && <ThemeMode />}
          <ShoppingCartPopup />
        </div>
      </div>
    </div>
  )
}
