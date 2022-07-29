import React, { useState } from 'react'
import axios from 'axios';
function App() {

  const [advice , setAdvice] = useState('');



 const fetchAdvice=()=>{
     axios.get('https://api.adviceslip.com/advice')
     .then((res)=>{
        console.log(res.data.slip.advice);
        setAdvice(res.data.slip.advice)
     })
     .catch((error)=>{
        console.log(error);
     });
     
    
    }
    
    
  return (
    
    <>
      <div>
        <h1>{advice}</h1>
        <button onClick={fetchAdvice}>click me</button>
      </div>
    </>
  )
}  

export default App