import { useState, createContext } from "react"
import { v4 } from "uuid"

export const TodoContext = createContext({})

export function TodoProvider({ children }){
    const [newTodoItem, setNewTodoItem] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleSubmitNewItem = () => {
        const newItem = {
            itemId: v4(),
            itemValue: newTodoItem
        }
        setTodoList((prevState) => [...prevState, newItem])
        setNewTodoItem('')
    }

    const removeItemFromList = (itemToRemove) => {
        setTodoList((prevState) => prevState.filter((item) => item.itemId !== itemToRemove))
    }
    
    return(
        <TodoContext.Provider value={{newTodoItem, todoList, setNewTodoItem, handleSubmitNewItem, removeItemFromList}}>
            {children}
        </TodoContext.Provider>
    )
}