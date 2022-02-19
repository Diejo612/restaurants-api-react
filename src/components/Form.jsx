import React,{useState}  from 'react'

const Form = ({refresh}) => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const crearRestaurant = async () => {
    const url = 'http://localhost:3000/api/v1/restaurants/';
    const data = {name, address};
    const requestOptions = {
      method: 'POST',
      redirect: 'follow',
      headers: {
        'Content-Type': 'application/json',
        'X-User-Email': 'holamundo@gmail.com',
        'X-User-Token': 'c2AzzdC7Ch-xX9koJvmC'
      },
      body: JSON.stringify(data)
    }

    const response = await fetch(url, requestOptions);
    refresh();
    setName('');
    setAddress('');
    console.log(response);
  }

  return (
    <div>
      <h1>Escriba un nuevo restaurante</h1>
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
      <button onClick={crearRestaurant}>
        Crear restaurant
      </button>
    </div>
  );
}

export default Form
