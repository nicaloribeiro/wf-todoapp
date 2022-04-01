import { Container, AddItemContainer, ItemListContainer } from "./style";
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
            <AddItemContainer>
                <InputComponent inputChangeHandler={setNewTodoItem} inputValue={newTodoItem} />
                <AddButtonComponent onClickHandler={handleSubmitNewItem} />
            </AddItemContainer>
            <ItemListContainer>
            {
                todoList.length > 0 ?
                    todoList.map((item) => <ItemComponent key={item.itemId} itemText={item.itemValue} onClickHandler={() => removeItemFromList(item.itemId)} />)
                    :
                    <EmptyListComponent emptyListMessage={'Nenhum item cadastrado'} />
            }
            </ItemListContainer>
        </Container>
    )
}