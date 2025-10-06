import { useState } from "react";

export function useCursor() {
    const [cursor, setCursor] = useState<number>(0);

    const cursorUp = () => {
        setCursor(prev => Math.max(0, prev-1));
    };

    const cursorDown = (maxIdx: number) => {
        setCursor(prev => Math.min(prev+1, maxIdx));
    };

    return {
        cursor,
        cursorUp,
        cursorDown,
    };
}