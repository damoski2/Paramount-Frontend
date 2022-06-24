import React, { useEffect, useRef } from "react";
import style from "../../styles/Services.module.css";
import Card from "./Card";
import {
  communityIcon,
  resumeIcon,
  houseIcon,
  universityIcon,
  pureArrowIcon,
  phoneIcon
} from "../../Images";
import Link from 'next/link';
//import gsap from "gsap";

const cards = [
    {
        id: 1,
        image: universityIcon,
        title: 'Help to find you university',
        content: 'See programs that best match your eligibility and aspirations'
    },
    {
        id: 2,
        image: resumeIcon,
        title: 'Application guidance',
        content: 'See programs that best match your eligibility and aspirations'
    },
    {
        id: 3,
        image: communityIcon,
        title: 'Build Community',
        content: 'See programs that best match your eligibility and aspirations'
    },
    {
        id: 4,
        image: houseIcon,
        title: 'Dormitory Services',
        content: 'See programs that best match your eligibility and aspirations'
    }
]

const Services = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3>OUR SERVICES</h3>
        <div className={style.line} />
      </div>
      <h1>Join a valuable resource built for decision makers</h1>
      <div className={style.card__div} >
        {cards.map((card, index) => (
            <Card {...card} key={index} />
        ))}
      </div>
      <div className={style.button__cnt}>
          <Link href="/">
            <button className={style.button__primary}>
              Explore More <img src={pureArrowIcon} />
            </button>
          </Link>
          <Link href="/contact-us">
            <button className={style.button__secondary}>
              Contact Us <img src={phoneIcon} />
            </button>
          </Link>
        </div>
    </div>
  );
};

export default Services;
