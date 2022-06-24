import React from 'react'
import style from '../../styles/Services.module.css'

const Card = ({ id, image, title, content }) => {

    console.log(image, id, title, content)

  return (
    <div className={style.card} key={id} >
        <img src={image} />
        <h2>{title}</h2>
        <p>{content}</p>
    </div>
  )
}

export default Card