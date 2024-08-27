import { useState } from "react"
import { AddToDo } from "./AddToDo"
import { List } from "./List";

export const ToDoList = () => {
    const [list, setList] = useState([])

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
    return <>

        <AddToDo
            onText={addText}

        />
        <List
            lists={list}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
        />

    </>

}