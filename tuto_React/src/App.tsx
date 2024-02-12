import '../public/style.css'
import { useEffect, useState } from "react"

function App(){
  const [showInput, setShowInput] = useState(true)

  return <div className="container my-3 stack">
    <input type="checkbox" checked={showInput} onChange={setShowInput} id="titleshow" label="Afficher le champs titre" />
    {showInput && <EditTitle/>}
    <div style={{height: '300vh'}}></div>
  </div>
}

function EditTitle() {
  const [title, setTitle] = useState('')
  const [firstname, setFirstname] = useState('')

  useEffect(() => {
    document.title = title
  }, [title])

  return <div>
    <input 
    type="text"
      placeholder="Modifier le titre"
      value={title}
      onChange={setTitle}
    />

    <input
    type="text"
      placeholder="Prénom"
      value={firstname}
      onChange={setFirstname}
    />
  </div>
}

export default App
