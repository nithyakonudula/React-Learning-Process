import React from 'react'

const App = () => {
  return (
    <div>
      <form onSubmit={(e)=>{
        e.preventDefault()
        console.log('form submitted')
      }}>

        <input type="text" placeholder='Enter Name' />
        <button>Submit</button>
        
      </form>
    </div>
  )
}

export default App
