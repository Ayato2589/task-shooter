import styled from "@emotion/styled";
import type { Schedule } from "../../types/schedule";
import { ScheduleItem } from "./ScheduleItem";
import { scheduleTypes } from "../../data/schedules";
import { toHHMM } from "../../lib/time";
import type { Todo } from "../../types/todo";
import { TodayDate } from "./TodayDate";

type Props = {
    schedules: Schedule[];
    todos: Todo[];
    todayDate: string;
    toggleTodo: (id: string) => void;
};

const TimeLine = styled.div({});

export function ScheduleTimeLine({ schedules, todayDate, todos, toggleTodo }: Props) {
    return (
        <TimeLine>
            <TodayDate todayDate={todayDate} />

            {schedules.map((schedule, idx) => (
                <ScheduleItem
                    schedule={{
                        title: scheduleTypes[schedule.typeId].title,
                        startTime: toHHMM(schedule.startTime.hour, schedule.startTime.minute),
                        endTime: toHHMM(schedule.endTime.hour, schedule.endTime.minute),
                    }}
                    todos={todos.filter(({ ScheduleTypeId }) => ScheduleTypeId == schedule.typeId)}
                    toggleTodo={toggleTodo}
                    key={idx}
                />
            ))}
        </TimeLine>
    );
}