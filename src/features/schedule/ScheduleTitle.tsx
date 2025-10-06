import styled from "@emotion/styled";
import { FONT_SIZE_OF } from "../../consts/size";

type Props = {
    title: string;
};

const Title = styled.div({
    fontSize: FONT_SIZE_OF.SCHEDULE_TITLE,
    transition: "all 0.15s ease",
});

export function ScheduleTitle({ title }: Props) {
    return <Title>{title}</Title>;
}
