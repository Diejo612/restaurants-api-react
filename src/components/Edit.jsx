import React, { useState, useEffect } from 'react'

const Edit = ({restaurante, refresh}) => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('');

  useEffect(() => {
    cargarData();
  }, [restaurante])

  const cargarData = async () => {
     const url = `http://localhost:3000/api/v1/restaurants/${restaurante.id}`;

     const requestOptions = {
       method: "GET",
       redirect: "follow",
     };

     const response = await fetch(url, requestOptions);
     const json = await response.json();
     setName(json.name);
     setAddress(json.address);
  }

  const editar = async () => {
    const url = `http://localhost:3000/api/v1/restaurants/${restaurante.id}`;
    const data = {name: name, address: address}
    const requestOptions = {
      method: "PATCH",
      redirect: "follow",
      headers: {
        "Content-Type": "application/json",
        "X-User-Email": "holamundo@gmail.com",
        "X-User-Token": "c2AzzdC7Ch-xX9koJvmC",
      },
      body: JSON.stringify(data)
    };

    const response = await fetch(url, requestOptions)
    refresh()
    setName('');
    setAddress('');
    console.log(response)
  }

  return (
    <div>
      <h1>Editar Restaurante</h1>
      <input
        type="text"
        placeholder="Escriba un nombre"
        onChange={(e) => setName(e.currentTarget.value)}
        value={name}
      />
      <input
        type="text"
        placeholder="Escriba una dirección"
        onChange={(e) => setAddress(e.currentTarget.value)}
        value={address}
      />
      <button onClick={() => editar()}>Editar restaurant</button>
    </div>
  );
}

export default Edit
