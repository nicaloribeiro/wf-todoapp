import { Row } from "./style";
import RemoveButton from "../RemoveButton";

export default function ItemComponent({ itemText, onClickHandler }) {
    return (
        <Row>
            <p>{itemText}</p>
            <RemoveButton onClickHandler={onClickHandler}/>
        </Row>
    )
}