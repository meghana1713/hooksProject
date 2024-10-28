import { useState } from 'react'
import ForExampple from './components/ForExampple'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ForExampple/>
    </>
  )
}

export default App
