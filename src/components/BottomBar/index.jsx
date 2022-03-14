import React from 'react'
import styles from './BottomBar.module.css'

export default function BottomBar() {
  return (
    <div className="BottomBarWrapper">
        <h1>Informacion de contacto</h1>
        <div className="InfoWrapper">
            <h2>Contactar</h2>
            <p>Ayuda(Preguntas frecuentes</p>
            <p>Asistencia</p>
            <p>Informacion de seguridad</p>
            <p>Socios</p>
        </div>
        <div className="RedesWrapper">
            <a href="https://www.instagram.com/___nachom/?hl=es-la" target="blank"><i></i></a>
            <a href="mailto:Jmaldifassi@correo.unimet.edu.ve" target="blank"><i></i></a>
            <a href="tel:+584242776019" target="blank"><i></i></a>
            <a href="https://www.tiktok.com/es/" target="blank"><i></i></a>
        </div>

    </div>
  )
}
