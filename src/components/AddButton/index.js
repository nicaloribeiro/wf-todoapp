import { Button } from "./style";
import AddIcon from '../../assets/icons/ic-add.svg'

export default function AddButtonComponent({ onClickHandler }){
    return(
        <Button onClick={onClickHandler} type="button">
            <img src={AddIcon} alt="Add Button"/>
        </Button>
    )
}