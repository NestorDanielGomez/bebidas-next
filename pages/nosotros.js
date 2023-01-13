import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/nosotros.module.css";
function Nosotros() {
  return (
    <Layout title="Acerca de nosotros" description="descripcion de nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            alt="img nosotros"
            src="/img/nosotros.jpg"
            width={1000}
            height={500}
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              interdum purus eget dapibus faucibus. Duis ultrices bibendum
              condimentum. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Duis justo turpis,
              rutrum sit amet leo id, pharetra euismod magna. Suspendisse tempor
              .
            </p>
            <p>
              Ut vel urna ultricies purus fringilla aliquam. Sed a imperdiet
              arcu. Cras eget pretium sapien. Phasellus suscipit ligula a metus
              iaculis, at porttitor sapien luctus. Sed sollicitudin, dui eu
              lacinia vestibulum, nisl nunc accumsan enim, nec sollicitudin
              parturient montes, nascetur ridiculus mus. Suspendisse potenti.
              Sed volutpat mauris orci, id facilisis risus gravida ut. Praesent
              .
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Nosotros;
