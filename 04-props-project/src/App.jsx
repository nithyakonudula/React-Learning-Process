//import React from 'react'

/*
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Amazon" data="Apply" />
      <Card user="Myntra" data="Apply" />
      <Card user="Amazon" data="Apply" />
      <Card user="Amazon" data="Apply" />
      <Card user="Amazon" data="Apply" />
    </div>
  )
}

export default App
*/

//import React from 'react'

//-------------------------practice-----------------------------------
/*
import Card from './components/Card';
import User from './components/User';

const App = () => {

  const arr = [
    {
      user : 'Nithya',
      age : 20
    }, 
    {
      user : 'Nithin',
      age : 22
    }, 
    {
      user : 'Charan',
      age : 23
    }, 
    {
      user : 'Yashu',
      age : 25
    }
  ];

  arr.map(function(elem){
    console.log(elem)
  })

  return (
    <div className="parent">
      
    </div>
  )
}

export default App;



*/




import React from 'react'
import Card from './components/Card'

const App = () => {


const arr = [
  {
    brandLogo: "https://cdn.simpleicons.org/google",
    name: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/microsoft",
    name: "Microsoft",
    datePosted: "10 days ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/amazon",
    name: "Amazon",
    datePosted: "2 weeks ago",
    post: "Backend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/meta",
    name: "Meta",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Remote, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/apple",
    name: "Apple",
    datePosted: "3 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/netflix",
    name: "Netflix",
    datePosted: "6 days ago",
    post: "UI/UX Designer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Remote, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/nvidia",
    name: "NVIDIA",
    datePosted: "4 weeks ago",
    post: "Machine Learning Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$75/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/adobe",
    name: "Adobe",
    datePosted: "2 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Noida, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/uber",
    name: "Uber",
    datePosted: "8 weeks ago",
    post: "Data Analyst",
    tag1: "Part Time",
    tag2: "Mid Level",
    pay: "$38/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://cdn.simpleicons.org/spotify",
    name: "Spotify",
    datePosted: "10 weeks ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Pune, India"
  }
];


  return (
    <div className='parent'>
      {arr.map((elem, idx)=>{
        return  <div key={idx}> 
                  <Card 
                    company={elem.name}
                    logo = {elem.brandLogo}
                    dayposted = {elem.datePosted}
                    post = {elem.post}
                    tag1 = {elem.tag1}
                    tag2 = {elem.tag2}
                    pay = {elem.pay}
                    loc = {elem.location}
                  />
                </div>
      })}
    </div>
  )
}

export default App

