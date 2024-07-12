import React from 'react'
import styles from '@/styles/auth/index.module.scss'
import { useForm } from 'react-hook-form'
import { EmailInput } from '@/components/elements/authPage/EmailInput'
import { PasswordInput } from '@/components/elements/authPage/PasswordInput'
import { FormType } from '@/types/auth'

export const SignInForm = ({ switchForm }: { switchForm: () => void }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<FormType>()

  const onSubmit = async (data: FormType) => {
    console.log('SignInFormType ---', data)
    resetField('email')
    resetField('password')
  }

  return (
    <form className={styles.form} id="b-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className={`${styles.form_title} ${styles.title}`}>
        Sign in to Website
      </h2>
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />

      <a className={styles.form__link}>Forgot your password?</a>
      <button
        className={`${styles.form__button} ${styles.button} ${styles.submit}`}
      >
        SIGN IN
      </button>
    </form>
  )
}
