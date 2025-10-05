import styled from "@emotion/styled";
import { FONT_SIZE_OF } from "../../consts/size";

type Props = {
    todayDate: string;
}

const Date = styled.div({
    fontSize: FONT_SIZE_OF.TODAY_DATE,
    marginBottom: '10px',
});

export function TodayDate({ todayDate }: Props) {
    return (
        <Date>{todayDate}</Date>
    );
}