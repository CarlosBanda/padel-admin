"use client";
import React, { useState } from 'react';
import ProductoCard from './ProductoCard';

import pd1 from "../public/img/pd1.jpeg";
import pd2 from "../public/img/pd2.jpg";
import pd3 from "../public/img/pd3.webp";
import pd4 from "../public/img/pd4.jpg";

const Productos = () => {
     const [productos, setProductos] = useState([]);

     useState(() => {
          const datos = [
               {
                    image: pd1,
                    title: 'Ropa',
                    description: 'Ropa deportiva'
               },
               {
                    image: pd2,
                    title: 'Accedorios',
                    description: 'Accedorios'
               },
               {
                    image: pd3,
                    title: 'Palas',
                    description: 'palas'
               },
               {
                    image: pd4,
                    title: 'Partidos',
                    description: 'Partidos próximos'
               },
          ];
          setProductos(datos);
     })
  return (
    <div className="contenedor-productos">
     {productos.map((producto, index) => (
          <ProductoCard
          key={index}
          image={producto.image}
          title={producto.title}
          description={producto.description}
          />
     ))}
      
    </div>
  )
}

export default Productos
