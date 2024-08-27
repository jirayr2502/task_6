export const ToDoItem = ({ handle, deleteItem, list: { id, text, completed } }) => {
    return (
        <>

            <tr>
                <td className={completed ? 'completed' : null}>
                    {text}
                </td>
                <td>
                    <button onClick={() => handle(id)}>{completed ? 'Cancel' : 'Complete'}</button>
                </td>
                <td>
                    <button onClick={() => deleteItem(id)}>Delete</button>
                </td>
            </tr>






        </>
    )
}