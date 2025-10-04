import styled from "@emotion/styled";
import type { Schedule } from "../../types/schedule";
import { ScheduleItem } from "./ScheduleItem";
import { initialTodos } from "../../data/todos";
import { scheduleTypes } from "../../data/schedules";
import { toHHMM } from "../../lib/time";
import { FONT_SIZE_OF } from "../../consts/size";

type Props = {
    schedules: Schedule[];
    todayDate: string;
};

const TimeLine = styled.div({

});

const TodayDate = styled.div({
    fontSize: FONT_SIZE_OF.TODAY_DATE,
    marginBottom: '10px',
});

export function ScheduleTimeLine({ schedules, todayDate }: Props) {
    return (
        <TimeLine>
            <TodayDate>{todayDate}</TodayDate>

            {schedules.map((schedule, idx) => (
                <ScheduleItem
                    schedule={{
                        title: scheduleTypes[schedule.typeId].title,
                        startTime: toHHMM(schedule.startTime.hour, schedule.startTime.minute),
                        endTime: toHHMM(schedule.endTime.hour, schedule.endTime.minute),
                    }}
                    todos={initialTodos.filter(({ ScheduleTypeId }) => ScheduleTypeId == schedule.typeId)}
                    key={idx}
                />
            ))}
        </TimeLine>
    );
}