//import React from 'react'

import Section1 from "./components/Section1/Section1"

const App = () => {
const users = [
  {
    img : 'https://plus.unsplash.com/premium_photo-1661645312997-53c1204fae36?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro : '',
    color : 'blue',
    tag : 'Satisfied'
  },
  {
    img : 'https://plus.unsplash.com/premium_photo-1661609200928-22408fbd85ff?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro : '',
    color : 'pink',
    tag : 'Underserved'
  },
  {
    img : 'https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro : '',
    color : 'orange',
    tag : 'UnderBanked'
  },
  {
    img : 'https://images.unsplash.com/photo-1747741744095-609572aa59ad?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro : '',
    color : 'seagreen',
    tag : 'Excellent'
  },
  {
    img : 'https://images.unsplash.com/photo-1727268533600-eb783879ae86?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro : '',
    color : 'gray',
    tag : 'Good'
  },
  {
    img : 'https://plus.unsplash.com/premium_photo-1661526276609-6eeda154939b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro : '',
    color : 'black',
    tag : 'Satisfied'
  }
]

  return (
    <div id="scr">
      <Section1 users = {users} />
    </div>
  )
}

export default App
