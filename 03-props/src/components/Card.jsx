//import React from 'react'

const Card = (props) => {
  return (
        <div className="Card">
          <img src="https://images.unsplash.com/photo-1795105673805-b7141341be42?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"></img>
          <h1>{props.user}</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, similique!</p>
          <button>View Profile</button>
        </div>
  )
}

export default Card
