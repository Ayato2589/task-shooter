import { useState } from "react";
import type { Todo } from "../types/todo";
import { initialTodos } from "../data/todos";

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (todo: Todo) => {
    setTodos((prev) => [...prev, todo]);
  };

  const updateTodo = (id: string, updated: Partial<Todo>) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, ...updated } : todo))
    );
  };

  const toggleTodo = (id: string) => {
    const toggleRecursive = (todos: Todo[]): Todo[] => {
      return todos.map((todo) => {
        if (todo.id === id) {
          // idが一致したら反転
          return { ...todo, isCompleted: !todo.isCompleted };
        }

        // 子要素があれば再帰的に探索
        if (todo.children) {
          return { ...todo, children: toggleRecursive(todo.children) };
        }

        return todo;
      });
    };

    setTodos((prev) => toggleRecursive(prev));
  };

  return {
    todos,
    addTodo,
    updateTodo,
    toggleTodo,
  };
}
