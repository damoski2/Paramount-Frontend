import React from 'react'
import style from '../../styles/About.module.css';
import { leftSlideIcon, rightSlideIcon } from '../../Images'

const About = () => {
  return (
    <div className={style.container} >
        <div className={style.header} >
            <div className={style.line} />
            <h3>ABOUT US</h3>
            <div className={style.line} />
        </div>
        <h1>Join a valuable resource built for decision makers</h1>
        <div className={style.content} >
            <img src={leftSlideIcon} className={style.leftSlideIcon} />
            <div className={style.info__screen} >
                <h2>What is paramount studnets</h2>
                <div className={style.line2} />
                <p>Lörem ipsum niktig telesk änina reade. Vora dost, nining monosav. Tivis sylasar ot. Pesad doren, vatoll krospenas. Heterosam roktig i vynde kror. Tivis sylasar ot. Pesad doren, vatoll krospenas. Heterosam roktig i vynde kror.</p>
            </div>
            <div className={style.black__screen} />
            <img src={rightSlideIcon} className={style.rightSlideIcon} />
        </div>
    </div>
  )
}

export default About