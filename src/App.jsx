import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Wheatherinfo from './WeatherInfo'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container' >
      <Wheatherinfo></Wheatherinfo>
    </div>

    </>
  )
}

export default App
