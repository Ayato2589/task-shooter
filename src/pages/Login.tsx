import styled from "@emotion/styled";
import { LoginForm } from "../features/login/LoginForm";
import { COLOR_OF } from "../consts/color";
import { useLogin } from "../hooks/useLogin";

const Page = styled.div({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLOR_OF.BACKGROUND,
});

export default function Login() {
    const { handleLogin } = useLogin();

    return (
        <Page>
            <LoginForm onSubmit={handleLogin}/>
        </Page>
    );
}