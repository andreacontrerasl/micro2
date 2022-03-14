import React from 'react';
import styles from './TopBar.module.css';
import { auth } from "../../utils/firebase-config";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from '../../context/UserContext';

export default function TopBar() {
    const { user } = useContext(UserContext);

    const handleLogout = async () => {await auth.signOut();};
  return (
    <ul className={styles.navbarContainer}>
        <li>
            <Link to='/' className={styles.linkTitle}>
                Cartelera Caracas
            </Link>
        </li>

        {!user ? (
            <li className={styles.rigthSide}>
               
                <a className={styles.container}>
                    <Link to='/cartelera' className={styles.link}>
                    Ver todas las peliculas
                    </Link>
                </a>


                <a className={styles.container}>
                    <Link to='/login' className={styles.link}>
                        Iniciar Sesión
                    </Link>
                </a>

                <a className={styles.container}>
                    <Link to='/register' className={styles.link}>
                        Registrarse
                    </Link>
                </a>
            </li>
        ):(
            <li className={styles.rigthSide}>
                <a className={styles.container}>
                    <Link to='/cartelera' className={styles.link}>
                        Ver todas las peliculas
                    </Link>
                </a>

                <a className={styles.container}>
                    <button type='button' onClick={handleLogout} className={styles.logoutBtn}>
                        Cerrar Sesión
                    </button>
                </a>
            </li>
        )}

    </ul>
    
  );

}
