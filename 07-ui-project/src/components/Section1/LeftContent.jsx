import React from 'react'
import Arrow from './Arrow'
import TextContent from './TextContent'

const LeftContent = () => {
  return (
    <div className='w-1/3 h-full flex flex-col justify-between px-5 py-2'>
        <TextContent />
        <Arrow />
    </div>
  )
}

export default LeftContent
