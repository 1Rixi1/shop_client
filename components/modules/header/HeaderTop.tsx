import styles from '@/styles/header/index.module.scss'
import Link from 'next/link'
import { CityButton } from '@/components/elements/cityButton/cityButton'
import ProfileDropDownMenu from '@/components/modules/header/ProfileDropDownMenu'
import { useMediaQuery } from '@/utils/useMediaQuery'
import { ThemeMode } from '@/components/elements/themeMode/ThemeMode'
import { usePopup } from '@/hooks/usePopup'
import { useStore } from 'effector-react'
import { $theme } from '@/context/theme'

export const HeaderTop = () => {
  const theme = useStore($theme)

  const darkModeClass = theme === 'dark' ? styles.dark_mode : ''

  const { isMedia: isMedia950 } = useMediaQuery(950)

  const { open, toggleOpen, closePopup } = usePopup()

  return (
    <div className={styles.header__top}>
      <div className={`container ${styles.header__top__container}`}>
        {isMedia950 && <CityButton />}

        {!isMedia950 && (
          <button
            className={`${styles.burger_menu} ${open ? styles.open : ''}`}
            onClick={toggleOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
        <nav
          className={`${styles.header__nav} ${open ? styles.open : ''} ${darkModeClass}`}
        >
          <ul className={styles.header__nav__list}>
            <li className={styles.header__nav__list__item}>
              <Link href="/shopping-payment" passHref legacyBehavior>
                <a
                  className={`${styles.header__nav__list__item__link} ${darkModeClass}`}
                  onClick={closePopup}
                >
                  Доставка и оплата
                </a>
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link href="/about" passHref legacyBehavior>
                <a
                  className={`${styles.header__nav__list__item__link} ${darkModeClass}`}
                  onClick={closePopup}
                >
                  О компании
                </a>
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link href="/catalog" passHref legacyBehavior>
                <a
                  className={`${styles.header__nav__list__item__link} ${darkModeClass}`}
                  onClick={closePopup}
                >
                  Каталог
                </a>
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link href="/contacts" passHref legacyBehavior>
                <a
                  className={`${styles.header__nav__list__item__link} ${darkModeClass}`}
                  onClick={closePopup}
                >
                  Контакты
                </a>
              </Link>
            </li>
            <li className={styles.header__nav__list__item}>
              <Link href="/wholesale-byers" passHref legacyBehavior>
                <a
                  className={`${styles.header__nav__list__item__link} ${darkModeClass}`}
                  onClick={closePopup}
                >
                  Оптовым покупателям
                </a>
              </Link>
            </li>
            {!isMedia950 && (
              <li className={styles.header__nav__list__item}>
                <ThemeMode />
              </li>
            )}
          </ul>
        </nav>

        <ProfileDropDownMenu />
      </div>
    </div>
  )
}
