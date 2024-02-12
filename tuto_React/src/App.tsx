import { useState } from "react"

function App() {
  const [firstname, setFirstname] = useState('John Doe')

  const handleChange = (e : Event) => {
    setFirstname(e.target.value)
  }

  const reset = () => {
    setFirstname('')
  }

  const [checked, setChecked] = useState(true)
  const toggleCheck = () => {
    setChecked(!checked)
  }

  return <form>
    <input type="text" name="firstname" value={firstname} onChange={handleChange} />
    <input type="checkbox" checked={checked} onChange={toggleCheck} />
    <button onClick={reset} disabled={!checked} type="button">Reset</button>
  </form>
}

export default App
