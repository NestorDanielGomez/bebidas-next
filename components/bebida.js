import Image from "next/image";
import Link from "next/link";
import styles from "../styles/bebidas.module.css";

export default function Bebida({ bebida }) {
  const { descripcion, imagen, nombre, precio, url } = bebida;
  return (
    <div className={styles.bebida}>
      <Image
        src={imagen.data.attributes.formats.thumbnail.url}
        alt={`imagen producto ${nombre}`}
        width={150}
        height={300}
      />
      <div className={styles.contenido}>
        <h3>{nombre}</h3>
        <p className={styles.descripcion}>{descripcion}</p>
        <p className={styles.precio}>${precio}</p>
        <Link href={`/bebidas/${url}`} className={styles.enlace}>
          Ver Producto
        </Link>
      </div>
    </div>
  );
}
