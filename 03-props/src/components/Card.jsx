//props = it a keyword generally used to pass data from parent component to child component in react js .

import React from 'react'

const Card = (props) => {

  return (
    <div className="card">
        <img src={props.src} alt="profile" />
        <h1>{props.name} , {props.age}</h1>
        <p>{props.description}</p>
        <button>View Profile </button>
      </div>
  )
}

export default Card
