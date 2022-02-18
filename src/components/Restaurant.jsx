import React from 'react'

const Restaurant = ({restaurantes}) => {
  return (
    <div>
      <h1>Restaurantes</h1>
      {
        restaurantes.map((restaurante) => {
          return <div>{restaurante.name}</div>
        })
      }
    </div>
  )
}

export default Restaurant
