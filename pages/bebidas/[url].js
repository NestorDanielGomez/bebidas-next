import Image from "next/image";
import Layout from "../../components/layout";
import styles from "../../styles/bebidas.module.css";

export default function Producto({ producto }) {
  const { nombre, descripcion, imagen, precio } = producto[0].attributes;
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
