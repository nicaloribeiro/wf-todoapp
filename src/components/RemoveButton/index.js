import { Button } from "./style";
import DeleteIcon from '../../assets/icons/ic-delete.svg'

export default function RemoveButtonComponent({ onClickHandler }) {
    return (
        <Button onClick={onClickHandler} type="button">
            <img src={DeleteIcon} alt="Remove Button"/>
        </Button>
    )
}