import React from 'react'
import style from '../../styles/Metrics.module.css'

const Metrics = () => {
  return (
    <div className={style.container} >
        <div className={style.milestone} >
            <h1>10k+</h1>
            <p>Students Admitted</p>
        </div>
        <div className={style.milestone} >
            <h1>500+</h1>
            <p>International Universities</p>
        </div>
        <div className={style.milestone} >
            <h1>17k+</h1>
            <p>Dormitory Bed Spaces</p>
        </div>
        <div className={style.milestone} >
            <h1>20+</h1>
            <p>Communities</p>
        </div>
    </div>
  )
}

export default Metrics