const style = {color: 'red'}
const showTitle = true
const todos = [
  'TODO1', 'todo2', 'testTdodo'
]

function App() {

  const handleClick = () => {
    alert('test')
  }

  return <>
    {
      showTitle && <Title color={'blue'} id='test'>Hello World</Title>
    }
    {
      showTitle ? 
      <input type="text" /> : <p style={style}>Show title false</p>
    }
    <p onClick={handleClick} >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et reprehenderit harum, aperiam itaque commodi numquam corrupti voluptas unde iure minus facere eveniet, autem excepturi quis totam saepe cumque possimus facilis!</p>
    <ul>
      {todos.map(todo => (<li key={todo}>{todo}</li>))}
    </ul>
  </>
}

function Title ({color, hidden , children, ...props}){
  if(hidden){return null}

  return <h1 style={{color: color}} className="title" {...props}>{children}</h1>
}

export default App
