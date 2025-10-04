import { useState } from "react";
import type { Todo } from "../types/todo";
import { initialTodos } from "../data/todos";

export function useTodos() {
    const [todos, setTodos] = useState<Todo[]>(initialTodos);

    const add = (todo: Todo) => {
        setTodos(prev => [...prev, todo])
    };

}