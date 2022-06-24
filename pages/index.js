import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Carousel, Metrics, About, Services } from "../components/import";

export default function Home() {
  return (
    <main>
      <div id="home">
        <Carousel />
        <Metrics />
      </div>
      <div id="about" >
        <About />
      </div>
      <div id="services" >
        <Services />
      </div>
    </main>
  );
}
