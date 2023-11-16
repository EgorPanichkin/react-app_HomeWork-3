import React, { useState } from 'react'
import style from './Form.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'

export default function Form({ onSubmit }) {
  const [inputValue, setValue] = useState('')

  const handleChange = (event) => {
      setValue(event.target.value)
  }

  const handleClick = () => {
    if (inputValue) {
      onSubmit(inputValue)
      setValue('')
  }}

  return (
    <>
      <div className={style.container}>
        <input value={inputValue} onChange={handleChange} placeholder='Input your task here...'/>
        <button className={style.create} onClick={handleClick}>Create<AiOutlinePlusCircle size={16}/></button>
      </div>
    </>
  )
}