import { useRef } from 'react';

export default function useTimeStore() {
    const startTime = useRef<number>(0);

    function getTime(): number {
        return (Date.now() - startTime.current) / 1000;
    }

    function clearTime(): void {
        startTime.current = Date.now();
    }

    return { getTime, clearTime };
}
