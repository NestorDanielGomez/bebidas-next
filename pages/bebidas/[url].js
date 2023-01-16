import { useState } from "react";
import Image from "next/image";
import Layout from "../../components/layout";
import styles from "../../styles/bebidas.module.css";

export default function Producto({ producto, agregarAlCarrito }) {
  const [cantidad, setCantidad] = useState(0);
  const { nombre, descripcion, imagen, precio } = producto[0].attributes;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cantidad < 1) {
      alert("cantidad no valida");
      return;
    }
    const productoSeleccionado = {
      id: producto[0].id,
      imagen: imagen.data.attributes.url,
      nombre,
      precio,
      cantidad,
    };
    agregarAlCarrito(productoSeleccionado);
  };

  return (
    <Layout title={`Producto ${nombre}`}>
      <div className={styles.bebida}>
        <Image
          src={imagen.data.attributes.url}
          alt={`imagen producto ${nombre}`}
          width={150}
          height={300}
        />
        <div className={styles.contenido}>
          <h3>{nombre}</h3>
          <p className={styles.descripcion}>{descripcion}</p>
          <p className={styles.precio}>${precio}</p>
          <form action="" className={styles.formulario} onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad:</label>
            <select
              name="cantidad"
              id=""
              onChange={(e) => {
                setCantidad(Number(e.target.value));
              }}>
              <option value="0">--Seleccione--</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <input type="submit" name="Agregar al carrito" id="" />
          </form>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/bebidas`);
  const { data } = await respuesta.json();

  const paths = data.map((bebida) => ({
    params: { url: bebida.attributes.url },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/bebidas?filters[url]=${url}&populate=imagen`
  );
  const { data: producto } = await respuesta.json();
  return {
    props: {
      producto,
    },
  };
}

// export async function getServerSideProps({ query: { url } }) {
//   const respuesta = await fetch(
//     `${process.env.API_URL}/bebidas?filters[url]=${url}&populate=imagen`
//   );
//   const { data: producto } = await respuesta.json();
//   return { props: { producto } };
// }
