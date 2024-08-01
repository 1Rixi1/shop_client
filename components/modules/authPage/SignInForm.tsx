import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { PasswordInput } from '@/components/elements/authPage/PasswordInput'
import { FormType } from '@/types/auth'
import { signInResponse } from '@/app/api/auth'
import { NameInput } from '@/components/elements/authPage/NameInput'
import { toast } from 'react-toastify'

import styles from '@/styles/auth/index.module.scss'
import spinnerStyles from '@/styles/spinner/index.module.scss'
import { showErrorMessage } from '@/utils/error'
import { useStore } from 'effector-react'
import { $theme } from '@/context/theme'
import { useRouter } from 'next/router'

export const SignInForm = () => {
  const [spinner, setSpinner] = useState(false)

  const router = useRouter()

  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<FormType>()

  const onSubmit = async (data: FormType) => {
    try {
      setSpinner(true)
      await signInResponse({
        url: 'users/login',
        username: data.username,
        password: data.password,
      })

      resetField('username')
      resetField('password')

      router.push('dashboard')
    } catch (err) {
      showErrorMessage(err)
    } finally {
      setSpinner(false)
    }
  }

  const theme = useStore($theme)

  const darkModeClass = theme === 'dark' ? styles.dark_mode : ''

  return (
    <form
      className={`${styles.form} ${darkModeClass}`}
      id="b-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className={`${styles.form_title} ${styles.title} ${darkModeClass}`}>
        Sign in to Website
      </h2>
      <NameInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />

      <a className={`${styles.form__link} ${darkModeClass}`}>
        Forgot your password?
      </a>
      <button
        className={`${styles.form__button} ${styles.button} ${styles.submit} ${darkModeClass}`}
      >
        {spinner ? <div className={spinnerStyles.spinner} /> : 'SIGN IN'}
      </button>
    </form>
  )
}
