import styles from "../styles/curso.module.css";

export default function Promocion({ promocion }) {
  const { descripcion, imagen, titulo } = promocion.attributes;
  return (
    <section>
      <div className={`${styles.curso} curso`}>
        <style jsx>{`
          .curso {
            background-image: linear-gradient(
                to right,
                rgb(0 0 0 / 0.65),
                rgb(0 0 0 / 0.7)
              ),
              url(${imagen?.data?.attributes?.url});
            background-size: cover;
            background-position: center center;
          }
        `}</style>
        <div className={`contenedor ${styles.grid}`}>
          <div className={`${styles.contenido}`}>
            <h2 className="heading">{titulo}</h2>
            <p className="">{descripcion}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
