import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {db, auth, googleProvider} from "../../utils/firebase-config";
import styles from './Register.module.css';

export default function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    console.log({ data });
    try{
      await auth.createUserWithEmailAndPassword(data.email, data.password);
      navigate("/");
    }catch(err){
      alert(err.message);
    }
  };

  const handleLoginWithGoogle = async () => {
    await auth.signInWithPopup(googleProvider);
    navigate("/");
  };

  const {formState: { errors },} = useForm();
  return (
    <div className={styles.container}>
      <header className={styles.box}>
      <form id='CreateAccount' onSubmit={handleSubmit(onSubmit)}>
        <h2>Crea tu cuenta</h2>
        <br />
        <br />
        <label>
            <label>Email</label>
            <input
              {...register("email", {required: { value: true, message: "Este campo es requerido" },})}
              type="email"
              placeholder="Enter a email"
              
            />
            { errors.email && (
            <span
              className={styles.labelText}
              style={{ color: "red", marginTop: "10px" }}
            >
              Error: {errors.email.message}
            </span>)}
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
            {errors.password && (
            <span
              className={styles.labelText}
              style={{ color: "red", marginTop: "10px" }}
            >
              Error: {errors.password.message}
            </span>)}
          </label>

          <br />
          <br />

          <button type="button" onClick={handleLoginWithGoogle}>
            Login with google
          </button>
          <br />
          <br />

          <button type="submit" id="btnRegister">
            Crear cuenta
          </button>
        </form>
        </header>
    </div>
  )
}

