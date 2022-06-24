import React from "react";
import style from "../../styles/Carousel.module.css";
import { playIcon, phoneIcon } from "../../Images";
import Link from "next/link";

const Carousel = () => {
  return (
    <div className={style.container}>
      <div className={style.left__section}>
        <h1>Pursue Your Dream Education in one platform</h1>
        <p>
          Lörem ipsum niktig telesk änina reade. Vora dost, nining monosav.
          Tivis sylasar ot. Pesad doren, vatoll krospenas. Heterosam roktig i
          vynde kror.{" "}
        </p>
        <div className={style.button__cnt}>
          <Link href="/">
            <button className={style.button__primary}>
              See how it works <img src={playIcon} />
            </button>
          </Link>
          <Link href="/contact-us">
            <button className={style.button__secondary}>
              Contact Us <img src={phoneIcon} />
            </button>
          </Link>
        </div>
      </div>
      <div className={style.right__section}>
        <div className={style.col1}>
          <div className={style.box} />
          <div className={style.box} />
        </div>
        <div className={style.col2}>
          <div className={style.box} />
          <div className={style.box} />
        </div>
        <div className={style.col1}>
          <div className={style.box} />
          <div className={style.box} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
