import styled from "@emotion/styled";
import { COLOR_OF } from "../consts/color";
import { ScheduleTimeLine } from "../features/schedule/ScheduleTimeLine";
import { FONT_SIZE_OF } from "../consts/size";
import { toMMDD } from "../lib/time";
import { useHotkeys } from "react-hotkeys-hook";
import { useScheduleTimeLine } from "../hooks/useScheduleTimeline";

const Page = styled.div({
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_OF.BACKGROUND,
    color: COLOR_OF.CHARACTER,
    fontSize: FONT_SIZE_OF.NORMAL_CHARACTER,
});

export default function Home() {
    const {
        cursor,
        cursorUp,
        cursorDown,
        extractTodaySchedules,
        addTodo,
        editTodo,
        completeTodo,
    } = useScheduleTimeLine();

    useHotkeys('w', cursorUp);
    useHotkeys('s', cursorDown);
    useHotkeys('c', addTodo);
    useHotkeys('e', editTodo);
    useHotkeys('enter', completeTodo);

    const todaySchedules = extractTodaySchedules();
    const todayDate = toMMDD(new Date());

    return (
        <Page>
            <ScheduleTimeLine
                todaySchedules={todaySchedules}
                todayDate={todayDate}
                cursor={cursor}
            />
        </Page>
    );
}