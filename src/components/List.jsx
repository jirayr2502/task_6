import { ToDoItem } from "./ToDoItem"



export const List = ({ lists, handleComplete, handleDelete }) => {
    return (
        <div className="centered-container">
            <table className="tablelist">
                {
                    lists.map(item => <ToDoItem key={item.id} list={item} handle={handleComplete} deleteItem={handleDelete} />)
                }
            </table>
        </div>
    )
}