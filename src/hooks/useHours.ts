import { useEffect, useState } from "react"

const useHours = () => {

    const [time, setTime] = useState(() => {
        const now = new Date();
        return {
            hour: now.getHours(),
            minutes: now.getMinutes(),
            seconds: now.getSeconds(),
        };
    });
    useEffect(() => {

        const updateClock = () => {
            const now = new Date();
            setTime({ hour: now.getHours(), minutes: now.getMinutes(), seconds: now.getSeconds() });
        };

        const now = new Date();
        const millisecondsToNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

        const timeoutId = setTimeout(() => {
            updateClock();
            const timerId = setInterval(updateClock, 60000);
            return () => clearInterval(timerId);
        }, millisecondsToNextMinute);

        return () => clearTimeout(timeoutId);
    }, []);

    return time;

}

export { useHours }