import styled from "@emotion/styled";
import { COLOR_OF } from "../../consts/color";
import { LoginBtn } from "./LoginBtn";

type Props = {
    onSubmit: () => void;
};

const Form = styled.div({
    display: 'flex',
    color: COLOR_OF.CHARACTER,
});

export function LoginForm({ onSubmit }: Props) {
    return (
        <Form>
            <LoginBtn onClick={onSubmit} />
        </Form>
    );
}