import { useState } from "react";

export const AddToDo = ({ onText }) => {

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
        onText(inpText.text);
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