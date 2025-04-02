"use client";

import CategoriasPopulares from "../../componentes/CategoriasPopulares";
import Formulario from "../../componentes/Formulario";
import styles from "../../styles/Home.module.css";


export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.bannerContainer}>    
            <h1 className={styles.title}>Descruba os novos sabores extraordinários</h1>
            <p className={styles.description}>Promoção de inauguração com até 50% de desconto!</p>
            <button className={styles.button}>Ver ofertas</button>
        </div>
            <CategoriasPopulares />

            <Formulario />
        </div>

        
    );
}