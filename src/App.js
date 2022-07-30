import React, { useState } from 'react'
import axios from 'axios';
import sample from './A man swimming and exploring the bottom of the mid-ocean ridge.mp4';
function App() {


  const [advice, setAdvice] = useState('');



  const fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((res) => {
        console.log(res.data.slip.advice);
        setAdvice(res.data.slip.advice)
      })
      .catch((error) => {
        console.log(error);
      });


  }


  return (

    <>
    <div className='navbar nav-bar' >Advice Generator</div>
   
      <div className='container'>
      
      <video className='videoTag' autoPlay loop muted>
          <source src={sample} type='video/mp4' />
        </video>
        <div className='advice'>
          <h1 className='advice-header'>{advice}</h1>
          <button className='advice-button' onClick={fetchAdvice}>click me</button>
        </div>
      </div>
    </>
  )
}

export default App