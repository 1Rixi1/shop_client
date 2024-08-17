import { ShoppingCartSvg } from '@/components/elements/shoppingCartSvg/ShoppingCartSvg'
import { AnimatePresence, motion } from 'framer-motion'
import { WrappedComponentType } from '@/types/common'
import { forwardRef } from 'react'
import { useStore } from 'effector-react'
import { $shoppingCart } from '@/context/shoppingCart'
import Link from 'next/link'
import { $theme } from '@/context/theme'
import { WithClickOutside } from '@/utils/WithClickOutside'

import styles from '@/styles/shoppingCartPopup/index.module.scss'

const ShoppingCartPopup = forwardRef<HTMLDivElement, WrappedComponentType>(
  ({ open, setOpen }, ref) => {
    const shoppingCartItems = useStore($shoppingCart)

    const theme = useStore($theme)

    const darkModeClass = theme === 'dark' ? styles.dark_mode : ''

    const handleToggleBtn = () => setOpen(!open)

    return (
      <div className={styles.cart} ref={ref}>
        <button
          className={`${styles.cart__btn} ${darkModeClass}`}
          onClick={handleToggleBtn}
        >
          {!!shoppingCartItems.length && (
            <span className={styles.cart__btn__count}></span>
          )}
          <span className={styles.cart__svg}>
            <ShoppingCartSvg />
          </span>
          <span className={styles.cart__text}>Корзина</span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              className={styles.cart__popup}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              style={{ transformOrigin: 'top right' }}
            >
              <h3 className={styles.cart__popup__title}>Корзина</h3>
              <ul className={styles.cart__popup__list}>
                {shoppingCartItems.length ? (
                  shoppingCartItems.map((item) => <li key={item.id} />)
                ) : (
                  <li
                    className={`${styles.cart__popup__empty} ${darkModeClass}`}
                  >
                    Корзина пуста
                  </li>
                )}
              </ul>

              <div className={styles.cart__popup__footer}>
                <div className={styles.cart__popup__footer__total}>
                  <span
                    className={`${styles.cart__popup__footer__text} ${darkModeClass}`}
                  >
                    Общая сумма заказа :
                  </span>
                  <span className={styles.cart__popup__footer__price}>0</span>
                </div>

                <Link href={'/order'} passHref legacyBehavior>
                  <button
                    className={styles.cart__popup__footer__btn}
                    disabled={!shoppingCartItems.length}
                  >
                    Оформить заказ
                  </button>
                </Link>
              </div>
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    )
  }
)

ShoppingCartPopup.displayName = 'ShoppingCartPopup'

export default WithClickOutside(ShoppingCartPopup)
