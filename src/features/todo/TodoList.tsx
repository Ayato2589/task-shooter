import styled from "@emotion/styled";

type Todo = {
  title: string;
  children: Todo[] | null;
};

type Props = {
  todos: Todo[];
};

const List = styled.div({
  display: "flex",
  flexDirection: "column",
  marginLeft: '20px',
});

const Item = styled.div<{ depth: number }>(({ depth }) => ({
  display: "flex",
  alignItems: "center",
  marginLeft: depth * 20, // 深さに応じて字下げ
  marginBottom: "4px",
}));

export function TodoList({ todos }: Props) {
  const renderTodos = (items: Todo[], depth = 0) => (
    <>
      {items.map((todo, idx) => (
        <div key={idx}>
          <Item depth={depth}>
            <input type="checkbox" />
            <span style={{ marginLeft: "8px" }}>{todo.title}</span>
          </Item>
          {todo.children && renderTodos(todo.children, depth + 1)}
        </div>
      ))}
    </>
  );

  return <List>{renderTodos(todos)}</List>;
}
