import { createEffect } from 'effector/effector.mjs'
import { SignInResponseType, SignUpRequestType } from '@/types/auth'
import { instance } from '../instance'
import { toast } from 'react-toastify'

export const signUpResponse = createEffect(
  async ({ url, username, email, password }: SignUpRequestType) => {
    const { data } = await instance.post(url, { username, email, password })

    if (data.errormessage) {
      debugger
      toast.warning(data.errormessage)
      return
    }

    toast.success('Регистрация прошла успешно')

    return data
  }
)

export const signInResponse = createEffect(
  async ({ url, username, password }: SignInResponseType) => {
    const { data } = await instance.post(url, { username, password })
    console.log('data ---', data)
    toast.success('Вход выполнен')

    return data
  }
)
