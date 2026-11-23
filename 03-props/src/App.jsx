//import React from 'react'

import Card from "./components/Card"

const App = () => {
  return (
    <div className="Parent">
      <Card  user='Nithin' age={18} />
      <Card  user='Nithya' age={16} />
      <Card  user='Charan' age={19} />
      <Card  user='Yashwanth' age={20} />

    </div>
  )
}

export default App