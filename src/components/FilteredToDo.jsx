import { useContext } from "react"
import { DataContext } from "../Data"

export const FilteredToDo = () => {

    const {filteredChange, onFiltered} = useContext(DataContext)

    const list = ['All', 'Completed', 'Active']

    return (
        <div >
            {
                list.map((criteria, index) => <button 
                    key={index}
                
                    onClick={() => onFiltered(criteria)}
                >
                    {criteria}
                </button>)
            }
        </div>
    )
}