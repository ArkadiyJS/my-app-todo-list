import React, { useState } from 'react';
import { v4 as uuid } from 'uuid'
import s from './form.module.css'

type FormProps = {
  onSubmit: Function
}


const FormAddTask: React.FC<FormProps> = ({ onSubmit }) => {

  const [taskName, setTaskName] = useState<string>('')

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (!!taskName) {
      const newTask = {
        id: uuid(),
        title: taskName,
        completed: false
      }

      onSubmit(newTask)
      setTaskName('')
    }

  }


  return (<form className={s.form} onSubmit={handleSubmit}>
    <input
      className={s.input}
      type='text'
      value={taskName}
      placeholder='Название задачи'
      onChange={(e) => { setTaskName(e.target.value) }}
    />

    <button className={s.button} type='submit' disabled={taskName === ''}>Добавить задачу</button>


  </form>

  );
}

export default FormAddTask;