import styled from "@emotion/styled";
import { ScheduleItem } from "./ScheduleItem";
import { TodayDate } from "./TodayDate";
import type { TodaySchedule } from "../../hooks/useScheduleTimeline";

type Props = {
    todaySchedules: TodaySchedule[];
    todayDate: string;
    cursor: number;
};

const TimeLine = styled.div({});

export function ScheduleTimeLine({ todaySchedules, todayDate, cursor }: Props) {
    return (
        <TimeLine>
            <TodayDate todayDate={todayDate} />

            {todaySchedules.map((schedule, idx) => (
                <ScheduleItem
                    schedule={schedule}
                    cursor={cursor}
                    key={idx}
                />
            ))}
        </TimeLine>
    );
}