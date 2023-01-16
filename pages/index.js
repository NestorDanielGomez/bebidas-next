import Link from "next/link";
import Layout from "../components/layout";
import Bebida from "../components/bebida";
import Post from "../components/post";
import Promocion from "../components/promocion";
import styles from "../styles/grid.module.css";

export default function Home({ bebidas, posts, promocion }) {
  return (
    <Layout title={"Inicio"} description={"Venta de Bebidas en Nextjs"}>
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <div className={styles.grid}>
          {bebidas?.map((bebida) => (
            <Bebida key={bebida.id} bebida={bebida.attributes} />
          ))}
        </div>
      </main>
      <Promocion promocion={promocion} />
      <section className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
          {posts.map((post) => (
            <Post key={post.id} post={post.attributes} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const urlBebidas = `${process.env.API_URL}/bebidas?populate=imagen`;
  const urlPosdts = `${process.env.API_URL}/posts?populate=imagen`;
  const urlPromocion = `${process.env.API_URL}/promocion?populate=imagen`;

  const [resBebidas, resPosts, resPromocion] = await Promise.all([
    fetch(urlBebidas),
    fetch(urlPosdts),
    fetch(urlPromocion),
  ]);

  const [{ data: bebidas }, { data: posts }, { data: promocion }] =
    await Promise.all([
      resBebidas.json(),
      resPosts.json(),
      resPromocion.json(),
    ]);

  return { props: { bebidas, posts, promocion } };
}
