import React from 'react'
import styles from './Login.module.css'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../utils/firebase-config";


export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordErros] = useState("");

  const onSubmit = async (data) => {
    console.log({ data });
    try{
      await auth.signInWithEmailAndPassword(data.email, data.password);
      navigate("/");
    }catch(err){
      alert(err.message);
    }
  };

  const handleLoginWithGoogle = async () => {
    await auth.signInWithPopup(googleProvider);
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <header className={styles.box}>
      <form id="login" onSubmit={handleSubmit(onSubmit)}>
        <h2>Ininicar sesión</h2>
        <br />
        <br />

        <label>
          <label>Email</label>
          <input
            {...register("email", {required: { value: true, message: "Este campo es requerido" },})}
            type="email"
            placeholder="Enter a email"
          />
        </label>

        <br />
        <br />

        <label>
          <label>Password</label>
          <input
            {...register("password", {required: { value: true, message: "Este campo es requerido" },})}
            type="password"
            placeholder="Enter a password"
          />
        </label>

        <br />
        <br />

        <button type="button" onClick={handleLoginWithGoogle}>
          Login with google
        </button>
        <br />
        <br />
        <button type="submit" onClick={onSubmit}>
          Iniciar Sesión
        </button>
      </form>
      </header>
    </div>
  );
  
}
