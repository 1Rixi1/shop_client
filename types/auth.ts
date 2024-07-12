import { UseFormRegister } from 'react-hook-form/dist/types/form'
import { FieldErrors } from 'react-hook-form/dist/types/errors'

export type SignUpFormType = {
  name: string
  email: string
  password: string
}

export type SignInFormType = {
  email: string
  password: string
}

export type InputFormType = {
  register: UseFormRegister<SignUpFormType | SignInFormType>
  errors: FieldErrors<SignUpFormType | SignInFormType>
}
