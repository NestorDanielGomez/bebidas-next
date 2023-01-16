import Layout from "../components/layout";
import styles from "../styles/carrito.module.css";

export default function Carrito() {
  return (
    <Layout title="carrito de compras">
      <main className="contendor">
        <h1 className="heading">Carro de compras</h1>
        <div className="">
          <div className="">
            <h2 className="">Articulos</h2>
          </div>
          <aside className="">
            <h3 className="">Resumen del pedido</h3>
            <p className="">Total a pagar</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
}
