import React from "react";
import { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  // function increaseNum() {
  //   setNum(num + 1);
  // }

  function increaseNum(){
    // setNum(num+1) --- agar yahi 3 baar likhogi tab bhi ek hi number increase hoga ie - 10 to 11 agar 3 se increase karna hai tho neeche ke lines ki tarah update karna hoga - yeh isliye ho raha hai kyunki jab hum directly num ko update karthe hai (yeh asynchronous ki tarah kaam karth hai - which means it takes time to update ) is liyeh yeh num ki value ko identify karna mushkil hai .......

    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
    setNum(prev=>(prev+1))
  }

  function decreaseNum() {
    setNum(num - 1);
  }

  function jumpby5() {
    setNum(num + 5);
  }



  const [name, setName] = useState('Nithin');

  function changeName(){
    setName('Nithya')
  }


  const [array, setArray] = useState([10,20,30,40])

  // function changeArray(){
  //   setArray([100,90,80,70])
  // }
  function changeArray(){
    const newArray = [...array]
    newArray.push(50)
    setArray(newArray)
  }

  const [obj, setObj] = useState({user:'Nithya', age:20})

  // const changeObj = ()=>{
  //   console.log(obj.user)
  //   setObj({user : 'Nithin', age: 22})
  // }

  const changeObjectRef = ()=>{
    // const newObj = {...obj}
    // newObj.user = 'Yashu'
    // newObj.age = 27
    // setObj(newObj)
    setObj(prev=>({...prev, age:50}))
  }

  
  return (
    <div>
      <div>
        <h1>{num}</h1>

        <button onClick={increaseNum}>Increase</button>

        <button onClick={decreaseNum}>Decrease</button>

        <button onClick={jumpby5}>Increase 5</button>
      </div>
      
      <br />

      <div>
        <h1>Hello, {name}</h1>

        <button onClick={changeName}>Change User</button>
      </div>
      
      <br />

      <div>
        <h1>Array : {array}</h1>
        <button onClick={changeArray}>Change Array</button>
      </div>

      <div>
        <h1>Object : {obj.user}, {obj.age}</h1>
        <button onClick={changeObjectRef}>Change object</button>
      </div>

    </div>
  );
};

export default App;
