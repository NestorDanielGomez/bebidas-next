import { useState, useEffect } from "react";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  const carritoLS =
    typeof window != "undefined"
      ? JSON.parse(localStorage.getItem("carrito")) ?? []
      : [];

  const [carrito, setCarrito] = useState(carritoLS);
  const [paginaLista, setPaginaLista] = useState(false);

  useEffect(() => {
    setPaginaLista(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const agregarAlCarrito = (bebida) => {
    if (carrito.some((bebidaState) => bebidaState.id === bebida.id)) {
      //itero el arreglo y busco el elemento duplicado
      const carroActualizado = carrito.map((bebidaEstado) => {
        if (bebidaEstado.id === bebida.id) {
          //rescribo solo la cantidad
          bebidaEstado.cantidad = bebida.cantidad;
          //sumo a la cantidad previa el valor que volvio a elegir
          //bebidaEstado.cantidad += bebida.cantidad;
        }
        return bebidaEstado;
      });
      setCarrito(carroActualizado);
    } else {
      setCarrito([...carrito, bebida]);
    }
  };

  const actualizarCantidad = (bebida) => {
    const carritoActualizado = carrito.map((bebidaState) => {
      if (bebidaState.id === bebida.id) {
        bebidaState.cantidad = bebida.cantidad;
      }
      return bebidaState;
    });
    setCarrito(carritoActualizado);
  };

  const eliminarBebida = (id) => {
    const carritoActualizado = carrito.filter(
      (bebidaState) => bebidaState.id !== id
    );
    setCarrito(carritoActualizado);
  };

  return paginaLista ? (
    <Component
      {...pageProps}
      carrito={carrito}
      agregarAlCarrito={agregarAlCarrito}
      actualizarCantidad={actualizarCantidad}
      eliminarBebida={eliminarBebida}
    />
  ) : null;
}
