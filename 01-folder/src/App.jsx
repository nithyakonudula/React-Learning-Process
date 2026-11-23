//import React from 'react'


const App = () => {
  return (
    //ek hi cheeze return kar sakthe hai is liye div mein hi sab kuch likhna hai jo bhi return karna hai (fragments use karthe hai solution ...)
    /*
    <div id = "Parent1">
      <h1 id = "child1">Hello</h1>
      <h3 id = "child2">From App</h3>
    </div>
    */

    //another solution
    /*
    <div id = "grand parent">
      <div id = "Parent1">
        <h1 id = "child1">Hello</h1>
        <h3 id = "child2">From parent 1</h3>
      </div>
      <div id = "Parent2">
        <h1 id = "child3">Hello</h1>
        <h3 id = "child4">From parent 2</h3>
      </div>
    </div>
    */

    //fragemnts - empty tag dekinge nahi jab render hoga toh
    
    <>
      <div id = "Parent1">
        <h1 id = "child1">Hello</h1>
        <h3 id = "child2">From parent 1</h3>
      </div>
      <div id = "Parent2">
        <h1 id = "child3">Hello</h1>
        <h3 id = "child4">From parent 2</h3>
      </div>
    </>
    

  )
}

export default App
