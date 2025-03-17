import { useState } from "react";
import { TodoType } from "../types/todoType";

export function useTodoList(defaultToDoList: TodoType[]): readonly [TodoType[], (title: string) => void, (id: string) => void, (id: string, isDone: boolean) => void] {
    const [todoList, setTodo] = useState(defaultToDoList);

    function AddTodoList(title: string) {
        if (title.trim() === "") {
            alert("タイトルを入力してください");
            return;
        }
        setTodo([...todoList, new TodoType(title, false)]);
    }

    function DeleteTodoList(id: string) {
        setTodo(todoList.filter((todo) => todo.id !== id));
    }

    function ChangeTodoState(id: string, isDone: boolean) {
        setTodo(todoList.map(t =>
            t.id === id ? new TodoType(t.title, isDone) : t // ✅ `TodoType` のインスタンスを正しく作成
        ));
    }

    return [todoList, AddTodoList, DeleteTodoList, ChangeTodoState] as const;
}