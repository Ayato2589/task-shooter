import styled from "@emotion/styled";
import type { TodayTodo } from "../../hooks/useScheduleTimeline";

type Props = {
    todos: TodayTodo[];
    cursor: number;
};

const List = styled.div({
    display: "flex",
    flexDirection: "column",
    marginLeft: "20px",
});

const Item = styled.div<{ depth: number; isFocused: boolean }>(
    ({ depth, isFocused }) => ({
        display: "flex",
        alignItems: "center",
        marginLeft: depth * 20,
        marginBottom: "4px",
        border: isFocused ? "2px solid #007AFF" : "2px solid transparent",
        borderRadius: "6px",
        padding: "2px 6px",
        transition: "border 0.15s ease",
    })
);

const Title = styled.span({
    marginLeft: "8px",
    cursor: "pointer",
});

export function TodoList({ todos, cursor }: Props) {
    const renderTodos = (items: TodayTodo[], depth = 0) => (
        <>
            {items.map((todo) => {
                const isFocused = cursor === todo.cursorIdx;
                return (
                    <div key={todo.id}>
                        <Item depth={depth} isFocused={isFocused}>
                            <Title>○ {todo.title}</Title>
                        </Item>
                        {todo.children && renderTodos(todo.children, depth + 1)}
                    </div>
                );
            })}
        </>
    );

    return <List>{renderTodos(todos)}</List>;
}
