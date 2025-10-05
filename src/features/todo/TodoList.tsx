import styled from "@emotion/styled";
import type { Todo } from "../../types/todo";

type Props = {
  todos: Todo[];
  toggleTodo: (id: string) => void;
};

const List = styled.div({
  display: "flex",
  flexDirection: "column",
  marginLeft: "20px",
});

const Item = styled.div<{ depth: number }>(({ depth }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: depth * 20, // 深さに応じて字下げ
  marginBottom: "4px",
}));

const Title = styled.span<{ completed: boolean }>(({ completed }) => ({
  marginLeft: "8px",
  textDecoration: completed ? "line-through" : "none",
  opacity: completed ? 0.6 : 1,
  cursor: "pointer",
  transition: "opacity 0.2s",
}));

export function TodoList({ todos, toggleTodo }: Props) {
  const renderTodos = (items: Todo[], depth = 0) => (
    <>
      {items.map((todo) => (
        <div key={todo.id}>
          <Item depth={depth}>
            <input
              type="checkbox"
              checked={todo.isCompleted}
              onChange={() => toggleTodo(todo.id)}
            />
            <Title
              completed={todo.isCompleted}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.title}
            </Title>
          </Item>
          {todo.children && renderTodos(todo.children, depth + 1)}
        </div>
      ))}
    </>
  );

  return <List>{renderTodos(todos)}</List>;
}
