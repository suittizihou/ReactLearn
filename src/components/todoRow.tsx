import "../css/button.css"
import { MyButton } from "./button"

export function TodoRow({ todoTitle, buttonText, onClick }: { todoTitle: string, buttonText: string, onClick: () => void }) {
    return (
        <tr>
            <th scope="row">{todoTitle}</th>
            <td><MyButton title={buttonText} onClick={ onClick }/></td>
        </tr>
    )
}