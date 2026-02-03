import { useState,useEffect } from 'react'
import { format } from 'date-fns'

import './App.css'

function App() {
  const [now,setNow] = useState(()=> new Date());
  useEffect(()=>{
    const id = setInterval(()=>{
      setNow(new Date())
    },1000);
    return ()=> clearInterval(id)
  },[])
  return (
    <div className='div'>
      
    <p className='p'>{format(now,"HH:MM:SS")}</p>
  

    </div>
  )
}

export default App
