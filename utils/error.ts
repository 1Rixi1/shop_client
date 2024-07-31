import { AxiosError } from 'axios'
import { HTTPStatus } from '@/constants'
import { toast } from 'react-toastify'

export const showErrorMessage = (err: unknown) => {
  const axiosError = err as AxiosError

  if (axiosError.response) {
    if (axiosError.response.status === HTTPStatus.UNAUTHORIZED) {
      toast.warning('Неверный логин или пароль')
      return
    }
  }

  toast.warning((err as Error).message)
}
