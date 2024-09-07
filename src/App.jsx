import { useState } from 'react'
import './App.css'
import { ToDoList } from './components/ToDoList'
import { DataContext } from './Data'

function App() {

  const [list, setList] = useState([])
  const [filteredChange, setFilteredChange] = useState('All')

  const addText = text => {
    setList([...list, { text: text, id: Date.now(), completed: false }])
  }
  const handleComplete = (id) => {
    setList(list.map(item =>
      item.id != id ? item : { ...item, completed: !item.completed }
    ))
  }
  const handleDelete = (id) => {
    setList(list.filter(item => {
      return item.id != id
    }))
  }

  return (
    <>

      <DataContext.Provider value={{ list,filteredChange,onFiltered:setFilteredChange, onDelete: handleDelete, onComplete: handleComplete, onAddText: addText }}>

        <ToDoList />

      </DataContext.Provider>
    </>
  )
}

export default App


