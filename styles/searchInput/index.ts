import {
  CSSObjectWithLabel,
  GroupBase,
  OptionProps,
  StylesConfig,
} from 'react-select'
import { OptionType } from '@/types/common'

export const controlStyles = (
  defaultStyles: CSSObjectWithLabel,
  theme: string
) => ({
  ...defaultStyles,
  cursor: 'pointer',
  backgroundColor: 'transparent',
  border: '1px solid #9E9E9E',
  height: '40px',
  boxShadow: 'none',
  borderRadius: '4px',
  '&:hover': {
    borderColor: '#9E9E9E',
  },
  '& .css-1dimb5e-singleValue': {
    color: theme === 'dark' ? '#f2f2f2' : '#222222',
  },
  borderRight: 'none',
  borderTopRightRadius: 0,
  borderBottomRightRadius: 0,
})

export const menuStyles = (
  defaultStyles: CSSObjectWithLabel,
  theme: string
) => ({
  ...defaultStyles,
  boxShadow: 'none',
  borderRadius: '4px',
  border: 'none',
  borderTopRightRadius: 0,
  borderTopLeftRadius: 0,
  height: 'auto',
  overflow: 'hidden',
  backgroundColor: theme === 'dark' ? '#2d2d2d' : '#ffffff',
  width: 'calc(100% + 40px)',
  minHeight: 30,
})

export const optionStyles = (
  defaultStyles: CSSObjectWithLabel,
  state: OptionProps<OptionType, boolean, GroupBase<OptionType>>,
  theme: string
) => {
  const backgroundHoverForLightMode = state.isSelected ? '#9e9e9e' : '#f2f2f2'

  const backgroundHoverForDarkMode = state.isSelected ? '#f2f2f2' : '#9e9e9e'

  const colorHoverForLightMode = state.isSelected ? '#f2f2f2' : '#9e9e9e'

  const colorHoverForDarkMode = state.isSelected ? '#9e9e9e' : '#f2f2f2'

  return {
    ...defaultStyles,
    cursor: 'pointer',
    padding: '6px 12px',
    margin: 0,
    '&:hover': {
      background:
        theme === 'dark'
          ? backgroundHoverForDarkMode
          : backgroundHoverForLightMode,

      color: theme === 'dark' ? colorHoverForDarkMode : colorHoverForLightMode,
    },

    background:
      theme === 'dark'
        ? state.isSelected
          ? '#f2f2f2'
          : '#2d2d2d'
        : state.isSelected
          ? '#2d2d2d'
          : '#f2f2f2',

    color:
      theme === 'dark'
        ? state.isSelected
          ? '#222222'
          : '#f2f2f2'
        : state.isSelected
          ? '#f2f2f2'
          : '#222222',
  }
}

export const searchInputStyles: StylesConfig<
  OptionType,
  boolean,
  GroupBase<OptionType>
> = {
  indicatorSeparator: () => ({
    border: 'none',
  }),

  dropdownIndicator: () => ({
    display: 'none',
  }),

  menuList: (defaultStyles) => ({
    ...defaultStyles,
    paddingTop: 0,
    paddingBottom: 0,
    minHeight: 30,

    '&::-webkit-scrollbar': {
      width: '8px',
    },
    '&::-webkit-scrollbar-track': {
      background: 'transparent',
    },

    '&::-webkit--scrollbar-thumb': {
      background: '#454545',
      borderRadius: '3px',
      backgroundColor: 'grey',
    },
  }),
}
