import React, { useState, useRef, useEffect } from "react";
import styles from "../../styles/Aluno.module.css";
import homestyles from "../../styles/Home.module.css";
import Profile from "./Profile";
import { motion, AnimatePresence } from "framer-motion";
import Router from "next/router";

export default function AlunoCard(aluno) {
  const [selectedId, setSelectedId] = useState(null);
  const formattedDate = new Date(aluno.aluno.DataNascimento);
  const wrapperRef = useRef(null);

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        if (wrapperRef.current.clientWidth != 0) {
          setSelectedId(null);
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

  async function deleteAluno() {
    await fetch(`api/${aluno.aluno._id}`, { method: "DELETE" });
    console.log("deletado");
    Router.push("/");
  }
  async function submitForm(event) {
    event.preventDefault();
    const obj = {
      Nome: event.target[0].value,
      DataNascimento: event.target[1].value,
      Curso: event.target[2].value,
    };
    await fetch(`api/${selectedId}`, {
      method: "PATCH",
      body: JSON.stringify(obj),
    });
    Router.push("/");
    setSelectedId(null);
  }

  return (
    <>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className={styles.card}
            onClick={() => setSelectedId(aluno.aluno._id)}
          >
            <div className={styles.ball}>
              <Profile nome={aluno.aluno.Nome}></Profile>
            </div>
            <div>
              <h2 className={styles.heading2}>{aluno.aluno.Nome}</h2>
              <h3 className={styles.heading3}>{aluno.aluno.Curso}</h3>
            </div>
          </div>
          <div className={styles.delete__button} onClick={() => deleteAluno()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#d7564b"
              className="bi bi-trash"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
              <path
                fillRule="evenodd"
                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
              />
            </svg>
          </div>
        </div>
      </motion.div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            layoutId={selectedId}
            initial={{ opacity: 0, width: 0, height: "300px" }}
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
                  Dados do aluno
                </h1>
              </div>
            </div>
            <div style={{ marginLeft: "20%", color: "#fff" }}>
              <motion.h2>Nome do aluno: {aluno.aluno.Nome}</motion.h2>
              <motion.h5 style={{ fontWeight: "500" }}>
                Ano de Nascimento: {formattedDate.getUTCFullYear()}
              </motion.h5>
              {aluno.aluno.Curso && (
                <motion.h5 style={{ fontWeight: "500" }}>
                  Curso Matriculado: {aluno.aluno?.Curso}
                </motion.h5>
              )}
              {aluno.aluno.Ativo && (
                <motion.h5 style={{ fontWeight: "500" }}>
                  Status: {aluno.aluno?.Ativo === true ? "Ativo" : "Inativo"}
                </motion.h5>
              )}
              <motion.h5 style={{ fontWeight: "500" }}>
                Ano de Nascimento: {formattedDate.getUTCFullYear()}
              </motion.h5>
            </div>
            <form
              style={{ marginLeft: "20%", color: "#fff" }}
              onSubmit={(e) => {
                submitForm(e);
              }}
            >
              <h2>Editar Aluno</h2>
              <h3>Nome:</h3>
              <input required placeholder={aluno.aluno.Nome}></input>
              <h3>Data de Nascimento:</h3>
              <input
                type="date"
                placeholder={aluno.aluno?.DataNascimento}
                required
              ></input>
              <h3>Curso:</h3>
              <input placeholder={aluno.aluno?.Curso} required></input>
              <br></br>
              <br></br>

              <button type="submit" value="Submit">
                Editar
              </button>
            </form>
            <div
              className={homestyles.button}
              style={{}}
              onClick={() => setSelectedId(null)}
            ></div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
