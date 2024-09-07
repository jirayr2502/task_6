import { useContext } from "react"
import { DataContext } from "../Data"

export const ToDoItem = ({ id, text, completed }) => {
    const { onComplete, onDelete } = useContext(DataContext)
    return (
        <>

            <tr>
                <td className={completed ? 'completed' : null}>
                    {text}
                </td>
                <td>
                    <button onClick={() => onComplete(id)}>{completed ? 'Cancel' : 'Complete'}</button>
                </td>
                <td>
                    <button onClick={() => onDelete(id)}>Delete</button>
                </td>
            </tr>






        </>
    )
}