import { ProfileSvg } from '@/components/elements/profileSvg/ProfileSvg'
import { AnimatePresence, motion } from 'framer-motion'
import { LogoutSvg } from '@/components/elements/logoutSvg/LogoutSvg'
import styles from '@/styles/profileDropDownMenu/index.module.scss'
import { useStore } from 'effector-react'
import { $theme } from '@/context/theme'
import { forwardRef } from 'react'
import { WrappedComponentType } from '@/types/common'
import { WithClickOutside } from '@/utils/WithClickOutside'

const ProfileDropDownMenu = forwardRef<HTMLDivElement, WrappedComponentType>(
  ({ open, setOpen }, ref) => {
    const theme = useStore($theme)
    const darkModeClass = theme === 'dark' ? styles.dark_mode : ''

    const handleToggleBtn = () => setOpen(!open)

    return (
      <div className={styles.profile}>
        <button className={styles.profile__btn} onClick={handleToggleBtn}>
          <span className={styles.profile__span}>
            <ProfileSvg />
          </span>
        </button>

        {open && (
          <AnimatePresence>
            <motion.ul
              className={`${styles.profile__dropdown} ${darkModeClass}`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={{ transformOrigin: 'right top' }}
            >
              <li className={styles.profile__dropdown__user}>
                <span
                  className={`${styles.profile__dropdown__username} ${darkModeClass}`}
                >
                  Ivan
                </span>
                <span
                  className={`${styles.profile__dropdown__email} ${darkModeClass}`}
                >
                  ivan123@gmail.com
                </span>
              </li>
              <li className={styles.profile__dropdown__item}>
                <button className={styles.profile__dropdown__item__btn}>
                  <span
                    className={`${styles.profile__dropdown__item__text} ${darkModeClass}`}
                  >
                    Выйти
                  </span>
                  <span
                    className={`${styles.profile__dropdown__item__svg} ${darkModeClass}`}
                  >
                    <LogoutSvg />
                  </span>
                </button>
              </li>
            </motion.ul>
          </AnimatePresence>
        )}
      </div>
    )
  }
)

ProfileDropDownMenu.displayName = 'ProfileDropDownMenu'

export default WithClickOutside(ProfileDropDownMenu)
