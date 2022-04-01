import TodoLayout from "./Todo";
import { TodoProvider } from "../../contexts/TodoContext";
import { PageWrapper } from "./style";

export default function Todo() {
    return (
       <TodoProvider>
           <PageWrapper>
                <TodoLayout/>
           </PageWrapper>
       </TodoProvider>
    )
}