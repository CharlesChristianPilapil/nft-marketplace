'use client';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface CountdownTime {
    hours: string;
    minutes: string;
    seconds: string;
}

const CountdownContext = createContext<CountdownTime | null>(null);

export const CountdownProvider = ({ children }: { children: ReactNode }) => {
    const targetDate = new Date();
    targetDate.setHours(targetDate.getHours() + 23);
    targetDate.setMinutes(targetDate.getMinutes() + 59);
    targetDate.setSeconds(targetDate.getSeconds() + 59);

    const calculateTimeLeft = (): CountdownTime => {
        const difference = +targetDate - +new Date();

        if (difference <= 0) {
            return { hours: '00', minutes: '00', seconds: '00' };
        }

        return {
            hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
            minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
            seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
        };
    };

    const [timeLeft, setTimeLeft] = useState<CountdownTime>(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <CountdownContext.Provider value={timeLeft}>
            {children}
        </CountdownContext.Provider>
    );
};

export const useCountdown = () => {
    const context = useContext(CountdownContext);
    if (!context) throw new Error("useCountdown must be used within CountdownProvider");
    return context;
};