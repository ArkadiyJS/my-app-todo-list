import React, { useCallback, useState } from 'react';
import s from './search.module.css'
import debounce from 'lodash.debounce'

type SearchProps = {setSearchValue:Function}

const Search: React.FC<SearchProps> = ({setSearchValue}) => {

  const [value, setValue] = useState('')

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      setSearchValue(str)
    }, 350), []
  )

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }


  return (
    <>
      <input
        className={s.input}
        type='text'
        value={value}
        onChange={(e) => onChangeInput(e)}
        placeholder='Найти задачу...'
      />

    </>
  );
}

export default Search;
