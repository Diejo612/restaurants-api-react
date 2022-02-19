import React, { useState } from 'react'
import Edit from './Edit';

const Restaurant = ({restaurantes, refresh}) => {

  const [restaurante, setRestaurante] = useState({id:'', name:'', address:''})

  const eliminar = async (id) => {
    const url = `http://localhost:3000/api/v1/restaurants/${id}`;
    const requestOptions = {
      method: "DELETE",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        "X-User-Email": "holamundo@gmail.com",
        "X-User-Token": "c2AzzdC7Ch-xX9koJvmC",
      },
    };

    const response = await fetch(url, requestOptions);
    refresh();
    console.log(response);
  };

  const editar = (restaurant) => {
    setRestaurante({id: restaurant.id, name: restaurant.name, address: restaurant.address})
  };


  return (
    <div>
      <h1>Restaurantes</h1>
      <table className="table table-primary">
        <thead>
          <tr>
            <th scope="col">Restaurant</th>
            <th scope="col">Addres</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {restaurantes.map((restaurante) => {
            return (
              <tr key={restaurante.id}>
                <td>{restaurante.name}</td>
                <td>{restaurante.address}</td>
                <td>
                  <span onClick={() => eliminar(restaurante.id)}> 🗑️ </span>
                  <span onClick={() => editar(restaurante)}> ✏️ </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Edit restaurante={restaurante} refresh={refresh} />
    </div>
  );
}

export default Restaurant
