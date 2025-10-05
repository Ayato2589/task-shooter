import styled from "@emotion/styled";
import { COLOR_OF } from "../consts/color";
import { ScheduleTimeLine } from "../features/schedule/ScheduleTimeLine";
import { FONT_SIZE_OF } from "../consts/size";
import { useTodos } from "../hooks/useTodos";
import { useSchedules } from "../hooks/useSchedules";

const Page = styled.div({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_OF.BACKGROUND,
    color: COLOR_OF.CHARACTER,
    fontSize: FONT_SIZE_OF.NORMAL_CHARACTER,
});

export default function Home() {
    const today = new Date();
    const todayDate = `${today.getMonth()+1}/${today.getDate()}`;

    const {
        todos,
        addTodo,
        updateTodo,
        toggleTodo,
    } = useTodos();

    const {
        addSchedule,
        updateSchedule,
        sortSchedulesByTime,
    } = useSchedules();

    const sortedSchedules = sortSchedulesByTime();

    return (
        <Page>
            <ScheduleTimeLine
                schedules={sortedSchedules}
                todos={todos}
                todayDate={todayDate}
                toggleTodo={toggleTodo}
            />
        </Page>
    );
}