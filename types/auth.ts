import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { FieldErrors } from 'react-hook-form/dist/types/errors'

export type FormType = {
  username: string
  email: string
  password: string
}

export type InputFormType = {
  register: UseFormRegister<FormType>
  errors: FieldErrors<FormType>
}

//SignUpRequest

export type SignUpRequestType = {
  url: string
  username: string
  email: string
  password: string
}

export type SignInResponseType = {
  url: string
  username: string
  password: string
}
