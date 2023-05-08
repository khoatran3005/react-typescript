import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Portfolio from './screens/Portfolio'

function App() {
  const [count, setCount] = useState(0)

  return (
    // < !--WRAPPER ALL-- >
    <Portfolio/>
  )
}

export default App
