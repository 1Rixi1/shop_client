import styles from '@/styles/auth/index.module.scss'
import { MutableRefObject, useRef } from 'react'
import { SignUpForm } from '@/components/modules/authPage/SignUpForm'
import { SignInForm } from '@/components/modules/authPage/SignInForm'

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

  return (
    <div className={styles.main}>
      <div
        ref={aContainer}
        className={`${styles.container} ${styles.a_container}`}
        id="a-container"
      >
        <SignUpForm switchForm={switchForm} />
      </div>

      <div
        ref={bContainer}
        className={`${styles.container} ${styles.b_container}`}
        id="b-container"
      >
        <SignInForm switchForm={switchForm} />
        {/*<form className={styles.form} id="b-form">*/}
        {/*  <h2 className={`${styles.form_title} ${styles.title}`}>*/}
        {/*    Sign in to Website*/}
        {/*  </h2>*/}
        {/*  <input*/}
        {/*    className={styles.form__input}*/}
        {/*    type="text"*/}
        {/*    placeholder="Email"*/}
        {/*  />*/}
        {/*  <input*/}
        {/*    className={styles.form__input}*/}
        {/*    type="password"*/}
        {/*    placeholder="Password"*/}
        {/*  />*/}
        {/*  <a className={styles.form__link}>Forgot your password?</a>*/}
        {/*  <button*/}
        {/*    className={`${styles.form__button} ${styles.button} ${styles.submit}`}*/}
        {/*  >*/}
        {/*    SIGN IN*/}
        {/*  </button>*/}
        {/*</form>*/}
      </div>

      <div ref={switchCtn} className={styles.switch} id="switch-cnt">
        <div ref={switchCircle1} className={styles.switch__circle}></div>
        <div
          ref={switchCircle2}
          className={`${styles.switch__circle} ${styles.switch__circle__t}`}
        ></div>

        <div ref={switchC1} className={styles.switch__container} id="switch-c1">
          <h2 className={`${styles.switch__title} ${styles.title}`}>
            Welcome Back !
          </h2>
          <p className={`${styles.switch__description} ${styles.description}`}>
            To keep connected with us please login with your personal info
          </p>
          <button
            onClick={switchForm}
            className={`${styles.switch__button} ${styles.button}`}
          >
            SIGN IN
          </button>
        </div>
        <div
          ref={switchC2}
          className={`${styles.switch__container} ${styles.is_hidden}`}
          id="switch-c2"
        >
          <h2 className={`${styles.switch__title} ${styles.title}`}>
            Hello Friend !
          </h2>
          <p className={`${styles.switch__description} ${styles.description}`}>
            Enter your personal details and start journey with us
          </p>
          <button
            onClick={switchForm}
            className={`${styles.switch__button} ${styles.button}`}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )
}
