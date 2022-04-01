import { Row } from "./style";

export default function EmptyListComponent({ emptyListMessage }) {
    return (
        <Row>
            <p>{emptyListMessage}</p>
        </Row>
    )
}