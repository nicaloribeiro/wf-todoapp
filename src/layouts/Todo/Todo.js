import { Container } from "./style";
import { TodoContext } from "../../contexts/TodoContext";
import { useContext } from "react";
import AddButtonComponent from "../../components/AddButton";
import InputComponent from "../../components/Input";
import ItemComponent from "../../components/Item";
import EmptyListComponent from "../../components/EmptyList";

export default function TodoLayout() {
    const { newTodoItem, setNewTodoItem, todoList, removeItemFromList, handleSubmitNewItem } = useContext(TodoContext)
    return (
        <Container>
            <div style={{ display: 'flex', marginBottom: '10px', justifyContent: 'space-between', width: '100%' }}>
                <InputComponent inputChangeHandler={setNewTodoItem} inputValue={newTodoItem} />
                <AddButtonComponent onClickHandler={handleSubmitNewItem} />
            </div>
            <div style={{ height: '280px', overflowY: 'auto'}}>
            {
                todoList.length > 0 ?
                    todoList.map((item) => <ItemComponent key={item.itemId} itemText={item.itemValue} onClickHandler={() => removeItemFromList(item.itemId)} />)
                    :
                    <EmptyListComponent emptyListMessage={'Nenhum item cadastrado'} />
            }
            </div>
        </Container>
    )
}