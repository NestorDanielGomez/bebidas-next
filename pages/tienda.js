import Layout from "../components/layout";
import Bebida from "../components/bebida";
import styles from "../styles/grid.module.css";

function Tienda({ bebidas }) {
  return (
    <Layout title="Tienda de productos" description="descripcion de tienda">
      <main className="contenedor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <div className={styles.grid}>
          {bebidas?.map((bebida) => (
            <Bebida key={bebida.id} bebida={bebida.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

export default Tienda;

//export async function getStaticProps
export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/bebidas?populate=imagen`
  );
  const { data: bebidas } = await respuesta.json();

  return { props: { bebidas } };
}
