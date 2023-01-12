import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import ContentGrid from './components/ContentGrid/ContentGrid'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App w-full h-full py-24 px-36">
     <Navbar />
     <ContentGrid />
    </div>
  )
}

export default App
