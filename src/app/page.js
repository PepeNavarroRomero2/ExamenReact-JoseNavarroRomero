'use client'
import Image from "next/image";
import styles from "./page.module.css";
import AnimalList from "./AnimalList";
import ImageCarousel from "./ImageCarousel";
import Library from "./Library";

export default function Home() {
  return (
    <div>
      <h1>Ejercicio 1</h1>
      <AnimalList/>
      <br></br>
      <br></br>
      <br></br>
      <h1>Ejercicio 2</h1>
      <ImageCarousel/>
      <br></br>
      <br></br>
      <br></br>
      <h1>Ejercicio 3</h1>
      <Library/>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
