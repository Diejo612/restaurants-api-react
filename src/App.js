import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import Restaurant from './components/Restaurant';

function App() {

  const [restaurantes, setRestaurantes] = useState([]);

  const initData = async () => {
    const url = 'http://localhost:3000/api/v1/restaurants/'
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    }
    const response = await fetch(url, requestOptions)
    const data = await response.json()
    setRestaurantes(data);
  }

  useEffect(() => {
    initData();
  }, [])

  return (
    <div>
      <Restaurant restaurantes={restaurantes} refresh={initData}/>
      <Form refresh={initData}/>
    </div>
  );
}

export default App;
