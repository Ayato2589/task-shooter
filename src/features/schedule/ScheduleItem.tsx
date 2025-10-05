import styled from "@emotion/styled";
import { TodoList } from "../todo/TodoList";
import { COLOR_OF } from "../../consts/color";
import { FONT_SIZE_OF } from "../../consts/size";
import type { Todo } from "../../types/todo";

type Schedule = {
    title: string;
    startTime: string; // HH:MM
    endTime: string; // HH:MM
}

type Props = {
    schedule: Schedule;
    todos: Todo[];
    toggleTodo: (id: string) => void;
}

const Item = styled.div({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '20px'
});

const LeftPart = styled.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
});

const BorderLine = styled.div({
    width: '2px' ,
    backgroundColor: COLOR_OF.BORDER,
    margin: '10px 10px',
});

const RightPart = styled.div({
    flex: 1,
});

const Title = styled.div({
    fontSize: FONT_SIZE_OF.SCHEDULE_TITLE,
})

export function ScheduleItem({ schedule, todos, toggleTodo }: Props) {
    return (
        <Item>
            <LeftPart>
                <div>{schedule.startTime}</div>
                <div>{schedule.endTime}</div>
            </LeftPart>
            <BorderLine />
            <RightPart>
                <Title>{schedule.title}</Title>
                {todos && <TodoList todos={todos} toggleTodo={toggleTodo} />}
            </RightPart>
        </Item>
    );
}