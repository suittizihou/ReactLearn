import { TodoRow } from "../components/todoRow";
import { useTodoList } from "../logic/useTodoList";
import "../css/todoList.css"
import { MyButton } from "../components/button";
import { useState } from "react";

export function ToDoApp() {
    const [todoList, AddTodoList, DeleteTodoList, ChangeTodoState] = useTodoList([]);
    const [todoTitle, setText] = useState("");

    return (
        <div>
            <h1>ToDoリストアプリ</h1>

            <div>
                <label>
                    やることのタイトル: <input name="myInput" value={todoTitle} onChange={(event) => setText(event.target.value)} />
                </label>
                <MyButton title="追加" onClick={() => { AddTodoList(todoTitle) }} />
            </div>

            <div>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">タイトル</th>
                            <th scope="col">完了ボタン</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todoList.filter(todo => !todo.isDone).map((todo) => (
                                <TodoRow
                                    key={todo.id}
                                    todoTitle={todo.title}
                                    buttonText="完了する"
                                    onClick={() => { ChangeTodoState(todo.id, true) }} />
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row">やることの数</th>
                            <td>{todoList.filter(todo => !todo.isDone).length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            ここから下は完了リスト<br />
            <div>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">タイトル</th>
                            <th scope="col">削除ボタン</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todoList.filter(todo => todo.isDone).map((todo) => (
                                <TodoRow
                                    key={todo.id}
                                    todoTitle={todo.title}
                                    buttonText="削除する"
                                    onClick={() => { DeleteTodoList(todo.id) }} />
                            ))
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th scope="row">完了したタスクの数</th>
                            <td>{todoList.filter(todo => todo.isDone).length}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
}