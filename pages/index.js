import Link from "next/link";
import Layout from "../components/layout";
export default function Home() {
  return (
    <Layout title={"Inicio"} description={"Venta de Bebidas en Nextjs"}>
      <h1>Hola desde Next</h1>
      <Link href="/nosotros">Nosotros</Link>
    </Layout>
  );
}
