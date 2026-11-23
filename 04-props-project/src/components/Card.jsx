//import React from 'react'
/*
const Card = (props) => {
  return (
      <div className="card">

        <div className="top">
            <h3>{props.user}</h3>
            <button>Save</button>
        </div>

        <div className="centre">
            <h3>{props.data}</h3>
            <p>Lorem ipsum dolor sit.</p>
            <p>Lorem, ipsum dolor.</p>
        </div>

        <div className="bottom">
            <button>Submit</button>
            <button>Cancel</button>
        </div>

      </div>
  )
}

export default Card
*/



//import React from 'react'
import { Bookmark } from "lucide-react"
const Card = (props) => {
  return (
    <div className="card">
        <div>
          <div className="top">
            <img src={props.logo} alt="" className="src" /> 
            <button>Save <Bookmark size={12} /></button>
          </div>

          <div className="centre">
            <h3>
              {props.company} <span>{props.dayposted}</span>
            </h3>
            <h2>{props.post}</h2>
            <div className="tag">
              <h5>{props.tag1}</h5>
              <h5>{props.tag2}</h5>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h4>{props.pay}</h4>
            <p>{props.loc}</p>
          </div>
          <button>Apply now</button>
        </div>
      </div>
  )
}

export default Card
