import { useContext, useState } from "react";
import { DataContext } from "../Data"

export const AddToDo = () => {
    const { onAddText } = useContext(DataContext)
    const [inpText, setInpText] = useState({
        text: ''
    })
    const [error, setError] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inpText.text.trim()) {
            return setError("please enter your text");
        }
        setError("");
        onAddText(inpText.text);
        
    };


    return <>

        <form onSubmit={handleSubmit}>
            {error && <p className="error">{error}</p>}
            <div>
                <h1 className="toDo">To Do List</h1>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="task to be done"
                    onChange={(e) => setInpText({ ...inpText, text: e.target.value })} />
                <button>Add</button>
            </div>
        </form>
    </>
}