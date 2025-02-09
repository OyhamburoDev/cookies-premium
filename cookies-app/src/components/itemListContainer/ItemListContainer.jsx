import React, { useEffect, useState } from "react";
import { getProductosFromFirestore } from "../../firebase.js";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getProductosFromFirestore()
      .then((respuesta) => {
        const categoriaEncontrada = id
          ? respuesta.filter((prod) => prod.categoria === Number(id))
          : respuesta;
        setProductos(categoriaEncontrada);
      })
      .catch((error) => {
        console.log("Error al cargar productos", error);
      });
  }, [id]);

  return (
    <div className="cnt-item-list">
      {productos.length > 0 ? (
        <ItemList productos={productos} />
      ) : (
        <p className="p-loading">Cargando categoría seleccionada...</p>
      )}
    </div>
  );
};

export default ItemListContainer;
