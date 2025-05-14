import { Variants } from "framer-motion";

type Direction = 'left' | 'right' | 'up' | 'down';
type TransitionType = 'spring' | 'tween' | 'keyframes' | 'inertia';

export const slideInVariant = (
    direction: Direction,
    type: TransitionType,
    delay: number,
    duration: number,
    amount: string = '100%'
): Variants => {
    return {
        initial: {
            x: direction === 'left' ? `-${amount}` : direction === 'right' ? amount : 0,
            y: direction === 'up' ? amount : direction === 'down' ? amount : 0,
            opacity: 0,
        },
        animate: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: 'easeOut',
            },
        },
    };
};

export const opacityVariant = (
    delay: number,
    duration: number,
): Variants => {
    return {
        initial: {
            opacity: 0,
        },
        animate: {
            opacity: 1,
            transition: {
                delay,
                duration
            }
        }
    };
};

export const blurVariant = (
    delay: number,
    duration: number,
    amount: string
): Variants => {
    return {
        initial: {
            opacity: 0,
            filter: `blur(${amount})`
        },
        animate: {
            opacity: 1,
            filter: "blur(0px)",
            transition: {
                delay,
                duration
            }
        }
    };
};

export const scaleVariant = (
    delay: number,
    duration: number,
    amount: number,
): Variants => {
    return {
        initial: {
            opacity: 0,
            scale: amount,
        },
        animate: {
            opacity: 1,
            scale: 1,
            transition: {
                delay,
                duration,
                type: 'tween'
            }
        }
    };
};