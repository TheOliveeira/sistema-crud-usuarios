import React from "react";
import styles from "../../styles/Aluno.module.css";
import { BigHead } from "@bigheads/core";
import Profile from "./Profile";

export default function Alunos() {
  return (
    <div className={styles.main__container}>
      <div className={styles.main__list}>
        <button className={styles.adicionar__aluno}>
          <h2 className={styles.adicionar__aluno__texto}>Adicionar Aluno</h2>
        </button>
        <div className={styles.card}>
          <div className={styles.ball}>
            <Profile></Profile>
          </div>
          <div>
            <h2>Aluno</h2>
            <h3>Classe</h3>
          </div>
          <>3dot</>
        </div>
        <div className={styles.card}>
          <div className={styles.ball}>
            <Profile></Profile>
          </div>
          <div>
            <h2>Aluno</h2>
            <h3>Classe</h3>
          </div>
          <>3dot</>
        </div>
      </div>
    </div>
  );
}
