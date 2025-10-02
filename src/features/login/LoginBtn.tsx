import styled from "@emotion/styled";
import { COLOR_OF } from "../../consts/color";

type Props = {
    onClick: () => void;
};

// TODO: スタイル改善の余地あり
const Btn = styled.button({
    padding: '10px 20px',
    border: `1px solid ${COLOR_OF.BORDER}`,
    borderRadius: '10px',
    cursor: "pointer",    
    fontSize: "16px",
    fontWeight: "bold",
    transition: "background-color 0.2s",

    "&:hover": {
        backgroundColor: "#005bb5",
    },

    "&:active": {
        backgroundColor: "#004494",
    },
});

export function LoginBtn({ onClick }: Props) {
    return (
        <Btn onClick={onClick}>ログイン</Btn>
    );
}