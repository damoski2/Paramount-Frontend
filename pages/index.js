import { useRef } from 'react';
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Carousel, Metrics, About, Services } from "../components/import";


gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const ref = useRef(null);
  const ref2 = useRef(null);

  //Gsap Animations
  const scrollTrigger = ScrollTrigger.create({
    trigger: ref.current,
    start: "top top", 
    pin: true, 
    pinSpacing: false ,
    markers:true
  });

  gsap.to(ref2.current,{
    scrollTrigger: {
      trigger: '.animating-element', //this is the element that will trigger the animation
      start: 'top center', //this string defines the trigger and scroller start
      end: 'bottom center', //this string defines the trigger and scroller end
      scrub: true //this tells GSAP to link animation progress to scroll progress
    },
    y: '50%', //translates the element downwards by 50%
    color: 'red' //transitions the color to red
  })


  return (
    <main>
      <div id="home" ref={ref}>
        <Carousel />
      </div>
      <div id="about" ref={ref2}>
        <Metrics />
        <About />
      </div>
      <div id="service">
        <Services />
      </div>
    </main>
  );
}
