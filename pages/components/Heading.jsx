import Head from "next/head";
import Image from "next/image";
import React from "react";
import styles from "../../styles/Home.module.css";
import Alunos from "./Alunos";

export default function Heading() {
  return (
    <div className={styles.nav__body}>
      <div className={styles.nav__alunos}>
        <h1 className={styles.nav__alunos__titulo}>Alunos</h1>
      </div>
      <Alunos></Alunos>
    </div>
  );
}
