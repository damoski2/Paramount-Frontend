import { useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Carousel, Metrics, About, Services } from "../components/import";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ref = useRef(null);
  const ref2 = useRef(null);

/*   useEffect(() => {
    const animation = gsap.to(ref2.current, {
      yPercent: 100,
    });

    ScrollTrigger.create({
      trigger: ref.current,
      start: "top top",
      markers: true,
      scrub: true,
      pin: true,
      pinSpacing: true,
      animation: animation,
      end: "+=4000"
    });
  }, []); */

  //Gsap Animations
  /*   const scrollTrigger = ScrollTrigger.create({
    trigger: ref.current,
    start: "top top", 
    pin: true, 
    pinSpacing: false ,
    markers:true,
  }); */

  /*  gsap.to(ref2.current,{
    scrollTrigger: scrollTrigger,
    y: '50%', //translates the element downwards by 50%
  }) */

  return (
    <main>
      <div id="home" ref={ref} className='ref' style={{ height: "100vh" }}>
        <Carousel />
      </div>
      <div id="about" className='ref' ref={ref2}>
        <Metrics />
        <About />
      </div>
      <div id="service" className='ref' >
        <Services />
      </div>
    </main>
  );
}
