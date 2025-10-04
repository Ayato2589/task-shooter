import styled from "@emotion/styled";
import { COLOR_OF } from "../consts/color";
import { ScheduleTimeLine } from "../features/schedule/ScheduleTimeLine";
import { schedules } from "../data/schedules";
import { FONT_SIZE_OF } from "../consts/size";

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

    return (
        <Page>
            <ScheduleTimeLine
                // HACK: ソートはorder by使う
                schedules={schedules.sort((a, b) => {
                    if (a.startTime.hour === b.startTime.hour) {
                        return a.startTime.minute - b.startTime.minute;
                    }
                    return a.startTime.hour - b.startTime.hour;
                })}
                todayDate={todayDate}
            />
        </Page>
    );
}