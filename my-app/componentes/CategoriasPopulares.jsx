import styles from "../styles/Categorias.module.css";
import CardCategoria from "./CardCategoria";

export default function CategoriasPopulares() {
    const categgorias = [
        { nome: "Sorvetes Tradicionais", icone: "🍦" },
    { nome: "Picolés", icone: "🍡" },
    { nome: "Milkshakes", icone: "🥤" },
    { nome: "Açaí", icone: "🫐" },
    { nome: "Vegano", icone: "🌱" },
    { nome: "Zero Açúcar", icone: "🚫" },
    { nome: "Especialidades", icone: "🎂" },
    { nome: "Novidades", icone: "✨" },
    ];

    return (
        <div className={styles.categorias}>
            <h2 className={styles.categoriasTitulo}>CATEGORIAS POPULARES</h2>
            <div className={styles.categoriasCards}>
                {categgorias.map((categoria, index) => (
                    <CardCategoria key={index} icone={categoria.icone} nome={categoria.nome} />
                ))}
            </div>
        </div>
    );
}