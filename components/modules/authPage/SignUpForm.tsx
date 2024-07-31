import React from 'react'
import styles from '@/styles/auth/index.module.scss'
import { useForm } from 'react-hook-form'
import { NameInput } from '@/components/elements/authPage/NameInput'
import { EmailInput } from '@/components/elements/authPage/EmailInput'
import { PasswordInput } from '@/components/elements/authPage/PasswordInput'
import { FormType } from '@/types/auth'
import { signUpResponse } from '@/app/api/auth'
import { toast } from 'react-toastify'
import {showErrorMessage} from "@/utils/error";

export const SignUpForm = ({ switchForm }: { switchForm: () => void }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm<FormType>()

  const onSubmit = async (data: FormType) => {
    console.log('DATA ---', data)
    try {
      const response = await signUpResponse({
        url: 'users/signup',
        username: data.username,
        email: data.email,
        password: data.password,
      })

      if (!response) {
        return
      }

      switchForm()
      resetField('email')
      resetField('username')
      resetField('password')


    } catch (err) {
      showErrorMessage(err)
    }
  }

  return (
    <form className={styles.form} id="a-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className={`${styles.form_title} ${styles.title}`}>Create Account</h2>
      <NameInput register={register} errors={errors} />
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />

      <button
        className={`${styles.form__button} ${styles.button} ${styles.submit}`}
      >
        SIGN UP
      </button>
    </form>
  )
}
