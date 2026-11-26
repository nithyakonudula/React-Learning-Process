//import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='w-2/3 h-full p-3 flex overflow-x-auto flex-nowrap gap-10 rounded-4xl'>
        {props.users.map((elem , idx)=>{
            return <RightCard key={idx} id={idx} img = {elem.img} tag = {elem.tag} color = {elem.color} />
        })}
    </div>
  )
}

export default RightContent