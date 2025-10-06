import styled from "@emotion/styled";
import { TodoList } from "../todo/TodoList";
import { LeftPart } from "../../components/LeftPart";
import { BorderLine } from "../../components/BorderLine";
import { RightPart } from "../../components/RightPart";
import { ScheduleTitle } from "./ScheduleTitle";
import type { TodaySchedule } from "../../hooks/useScheduleTimeline";

type Props = {
    schedule: TodaySchedule;
    cursor: number;
};

const Row = styled.div({
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '20px'
});

export function ScheduleItem({ schedule, cursor }: Props) {
    return (
        <Row>
            <LeftPart>
                <div>{schedule.startTime}</div>
                <div>{schedule.endTime}</div>
            </LeftPart>
            <BorderLine />
            <RightPart>
                <ScheduleTitle title={schedule.title} />
                <TodoList todos={schedule.todos} cursor={cursor} />
            </RightPart>
        </Row>
    );
}