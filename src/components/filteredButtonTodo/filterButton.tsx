import React from 'react';
import s from './filterButton.module.css'

type filterButtonProps = {
  todoFilter: Function 
}

const FilterButton:React.FC<filterButtonProps>=({todoFilter})=> {
  return (
    <div className={s.filter}>
      
      <button className={s.button} onClick={()=>todoFilter('all')}>Все</button>
      <button className={s.button} onClick={()=>todoFilter(true)}>Выполненые</button>
      <button className={s.button} onClick={()=>todoFilter(false)}>НЕ Выполненые</button>
    </div>
  );
}

export default FilterButton;