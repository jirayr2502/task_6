import { ToDoItem } from "./ToDoItem"
import { DataContext } from "../Data"
import { useContext } from "react"
import { FilteredToDo } from "./FilteredToDo"



export const List = () => {
    const { list, filteredChange } = useContext(DataContext)
    let newList = [...list]
    if (filteredChange == 'Completed') {
        newList = newList.filter(todo => todo.completed)
    } else if (filteredChange == 'Active') {
        newList = newList.filter(todo => !todo.completed)
    }

    return (
        <div className="centered-container">
            <table className="tablelist">
                {list.length ? <FilteredToDo /> : null}
                {
                    newList.map(item => <ToDoItem key={item.id} {...item} />)
                }
            </table>
        </div>
    )
}