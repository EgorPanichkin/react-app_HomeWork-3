import React from 'react'
import style from './Item.module.css'
import { MdDelete } from 'react-icons/md'

export default function Item({ title }) {
  return (
      <div className={style.container}>
        <div>{title}</div>
      </div>
  )
}