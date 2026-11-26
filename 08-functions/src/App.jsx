import React from 'react'

const App = () => {

  const change = ()=>{
    console.log('Double clicked')
  }

  function change2(){
    console.log('single clicked')
  }



  return (
    <div id='page'>
      <h1>Hello, Nithya</h1>

      <button onClick={change2}>Single click pls</button>

      <button onDoubleClick={change}>Double click please</button>

      <button id='box' onMouseMove={(elem)=>{
        console.log(elem.clientX , elem.clientY)
      }}>Mouse movement in a box</button>

      <button onMouseEnter={()=>{console.log('Mouse enetered !')}} onMouseLeave={()=>{console.log('Mouse leaved!')}}
        >Mouse Entered & leaved</button>

      <input onChange={(elem)=>{
        console.log(elem)
        console.log(elem.nativeEvent.data)
      }} type='text' placeholder='Enter Text' />




    </div>
  )
}

export default App
