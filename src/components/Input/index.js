import { Input } from './style'

export default function InputComponent({ inputValue, inputChangeHandler }) {
    return (
        <Input type="text" value={inputValue} onChange={(e) => inputChangeHandler(e.target.value)} placeholder="Digite..."/>
    )
}