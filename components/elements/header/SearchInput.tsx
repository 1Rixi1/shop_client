import Select from 'react-select'
import { useState } from 'react'
import { SearchOptionType } from '@/types/common'
import {
  controlStyles,
  menuStyles,
  optionStyles,
  searchInputStyles,
} from '@/styles/searchInput'
import { useStore } from 'effector-react'
import { $theme } from '@/context/theme'

export const SearchInput = () => {
  const theme = useStore($theme)

  const [searchOption, setSearchOption] = useState<SearchOptionType>(null)

  const onChangeSearchOption = (option: SearchOptionType) => {
    setSearchOption(option)
  }

  return (
    <Select
      placeholder="Я ищу ..."
      value={searchOption}
      onChange={onChangeSearchOption}
      styles={{
        ...searchInputStyles,
        control: (defaultStyles) => ({
          ...controlStyles(defaultStyles, theme),
        }),

        input: (defaultStyles) => ({
          color: theme === 'dark' ? '#f2f2f2' : '#222222',
        }),

        menu: (defaultStyles) => ({
          ...menuStyles(defaultStyles, theme),
        }),
        option: (defaultStyles, state) => ({
          ...optionStyles(defaultStyles, state, theme),
        }),
      }}
      isClearable={true}
      openMenuOnClick={false}
      options={[1, 2, 3, 4, 5, 6].map((item) => ({ value: item, label: item }))}
    />
  )
}
