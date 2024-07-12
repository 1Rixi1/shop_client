import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { FieldErrors } from 'react-hook-form/dist/types/errors'

export type FormType = {
  name: string
  email: string
  password: string
}

export type InputFormType = {
  register: UseFormRegister<FormType>
  errors: FieldErrors<FormType>
}
