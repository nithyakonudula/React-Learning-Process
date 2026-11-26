//import React from 'react'
import { ArrowRight } from 'lucide-react'


const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 p-8 h-full w-full flex flex-col justify-between'>

        <h2 className='w-10 h-10 flex justify-center items-center rounded-full bg-white text-black text-xl font-bold'>{props.id+1}</h2>
        <p className='text-shadow-2xs text-lg leading-normal text-white'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni quia cum non aut fugiat vel asperiores dicta suscipit.</p>
        <div className='flex justify-between'>
            <button style={{backgroundColor : props.color}} className='text-white font-med text-lg px-8 py-2 rounded-full'>{props.tag}</button>
            <button style={{backgroundColor : props.color}} className=' text-white flex justify-center items-center text-lg w-10 h-10 rounded-full'><ArrowRight /></button>
        </div>

      </div>
  )
}

export default RightCardContent
