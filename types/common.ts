import { MultiValue, SingleValue } from 'react-select'

export type WrappedComponentType = {
  open: boolean
  setOpen: (value: boolean) => void
}

export type OptionType = {
  value: string | number
  label: string | number
}

export type SearchOptionType =
  | MultiValue<OptionType>
  | SingleValue<OptionType>
  | null
