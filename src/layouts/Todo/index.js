import TodoLayout from "./Todo";
import { TodoProvider } from "../../contexts/TodoContext";

export default function Todo() {
    return (
       <TodoProvider>
           <TodoLayout/>
       </TodoProvider>
    )
}