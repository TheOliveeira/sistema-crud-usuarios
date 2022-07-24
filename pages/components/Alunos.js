import React, { useRef, useEffect, useState } from "react";
import styles from "../../styles/Aluno.module.css";
import homestyles from "../../styles/Home.module.css";
import AlunoCard from "./AlunoCard";
import { motion, AnimatePresence } from "framer-motion";
import Router from "next/router";

export default function Alunos(alunos) {
  const [form, setForm] = useState();
  const wrapperRef = useRef(null);
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (wrapperRef.current.clientWidth != 0) {
          setForm(false);
        }
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  async function submitForm(event) {
    console.log("Form submitted", event);
    event.preventDefault();
    console.log(event.target[0].value);
    console.log(event.target[1].value);
    console.log(event.target[2].value);
    const obj = {
      Nome: event.target[0].value,
      DataNascimento: event.target[1].value,
      Curso: event.target[2].value,
    };
    await fetch(`api/create`, { method: "POST", body: JSON.stringify(obj) });
    Router.push("/");
    setForm(false);
  }
  return (
    <div className={styles.main__container}>
      <div className={styles.main__list}>
        <button
          className={styles.adicionar__aluno}
          onClick={() => setForm(true)}
        >
          <h2 className={styles.adicionar__aluno__texto}>Adicionar Aluno</h2>
        </button>
        <div className={styles.cards__container}>
          {alunos[Object.keys(alunos)[0]].map((alunoUnitario, idx) => (
            <React.Fragment key={idx}>
              <AlunoCard aluno={alunoUnitario}></AlunoCard>
            </React.Fragment>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {form && (
          <motion.div
            layoutId={form}
            initial={{ opacity: 0, width: 0, height: "0px" }}
            animate={{ opacity: 1, width: "100%", height: "800px" }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            transition={{ duration: 0.75, delay: 0.2 }}
            style={{ pointerEvents: "auto" }}
            className={styles.overlay}
            ref={wrapperRef}
          >
            <div className={homestyles.nav__body}>
              <div
                className={homestyles.nav__alunos}
                style={{ backgroundColor: "#5350eb", width: "100%" }}
              >
                <h1 className={homestyles.nav__alunos__titulo}>
                  Cadastrar Aluno
                </h1>
              </div>
            </div>
            <div
              className={homestyles.button}
              style={{}}
              onClick={() => setForm(false)}
            ></div>
            <form
              style={{ marginLeft: "1em", color: "#fff" }}
              onSubmit={(e) => {
                submitForm(e);
              }}
            >
              <h3>Nome:</h3>
              <input required></input>
              <h3>Data de Nascimento:</h3>
              <input type="date" required></input>
              <h3>Curso:</h3>
              <input required></input>
              <hr></hr>
              <button type="submit" value="Submit">
                Cadastrar
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
