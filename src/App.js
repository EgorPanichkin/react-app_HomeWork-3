import './App.css';
import Header from './components/Header/Header'
import Form from './components/FormTodo/Form'
import Item from './components/Item/Item'
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([])

  const handleSubmit = (value) => {
    setTodos(todos.concat(value))
  }

  return (
    <div className="App">
      <Header />
      <Form onSubmit={handleSubmit}/>
      <div className='todos-container'>
        {todos.map((todo, index) => {
          return <Item title={todo} key={index.toString()}/>
        })}
      </div>
    </div>
  );
}

export default App;
