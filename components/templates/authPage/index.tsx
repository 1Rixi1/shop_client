import styles from '@/styles/auth/index.module.scss'
import { MutableRefObject, useRef } from 'react'
import { SignUpForm } from '@/components/modules/authPage/SignUpForm'
import { SignInForm } from '@/components/modules/authPage/SignInForm'
import { ThemeMode } from '@/components/elements/themeMode/ThemeMode'
import {useStore} from "effector-react";
import {$theme} from "@/context/theme";

export const AuthPage = () => {
  const switchCtn = useRef() as MutableRefObject<HTMLDivElement>
  const switchC1 = useRef() as MutableRefObject<HTMLDivElement>
  const switchC2 = useRef() as MutableRefObject<HTMLDivElement>
  const switchCircle1 = useRef() as MutableRefObject<HTMLDivElement>
  const switchCircle2 = useRef() as MutableRefObject<HTMLDivElement>
  const aContainer = useRef() as MutableRefObject<HTMLDivElement>
  const bContainer = useRef() as MutableRefObject<HTMLDivElement>

  const switchForm = () => {
    switchCtn.current.classList.add(styles.is_gx)
    setTimeout(() => switchCtn.current.classList.remove(styles.is_gx), 1500)

    switchCtn.current.classList.toggle(styles.is_txr)
    switchCircle1.current.classList.toggle(styles.is_txr)
    switchCircle2.current.classList.toggle(styles.is_txr)

    switchC1.current.classList.toggle(styles.is_hidden)
    switchC2.current.classList.toggle(styles.is_hidden)
    aContainer.current.classList.toggle(styles.is_txl)
    bContainer.current.classList.toggle(styles.is_txl)
    bContainer.current.classList.toggle(styles.is_z200)
  }


  const theme = useStore($theme)

  const darkModeClass = theme === 'dark' ? styles.dark_mode : ''

  return (
    <div className={`${styles.main} ${darkModeClass}`}>
      <div className={styles.mode_toggle}>
        <ThemeMode />
      </div>
      <div
        ref={aContainer}
        className={`${styles.container} ${styles.a_container} ${darkModeClass}`}
        id="a-container"
      >
        <SignUpForm switchForm={switchForm} />
      </div>

      <div
        ref={bContainer}
        className={`${styles.container} ${styles.b_container} ${darkModeClass}`}
        id="b-container"
      >
        <SignInForm />
      </div>

      <div ref={switchCtn} className={`${styles.switch} ${darkModeClass}`} id="switch-cnt">
        <div ref={switchCircle1} className={`${styles.switch__circle} ${darkModeClass}`}></div>
        <div
          ref={switchCircle2}
          className={`${styles.switch__circle} ${styles.switch__circle__t} ${darkModeClass}`}
        ></div>

        <div ref={switchC1} className={styles.switch__container} id="switch-c1">
          <h2 className={`${styles.switch__title} ${styles.title} ${darkModeClass}`}>
            Welcome Back !
          </h2>
          <p className={`${styles.switch__description} ${styles.description} ${darkModeClass}`}>
            To keep connected with us please login with your personal info
          </p>
          <button
            onClick={switchForm}
            className={`${styles.switch__button} ${styles.button} ${darkModeClass}`}
          >
            SIGN IN
          </button>
        </div>
        <div
          ref={switchC2}
          className={`${styles.switch__container} ${styles.is_hidden}`}
          id="switch-c2"
        >
          <h2 className={`${styles.switch__title} ${styles.title} ${darkModeClass}`}>
            Hello Friend !
          </h2>
          <p className={`${styles.switch__description} ${styles.description} ${darkModeClass}`}>
            Enter your personal details and start journey with us
          </p>
          <button
            onClick={switchForm}
            className={`${styles.switch__button} ${styles.button} ${darkModeClass}`}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )
}
