import Button from "@/components/Button"
import { slideInVariant } from "@/utils/animation/motion"
import { useCountdown } from "@/utils/Context/CountdownContext";
import useViewportDelay from "@/utils/hooks/useViewportDelay";
import { motion } from "framer-motion"

const MotionSettings = {
    initial: 'initial',
    whileInView: 'animate',
    viewport: { once: true, amount: 0.5 }
};

const AutctionTimer = () => {

    const viewportDelayMd = useViewportDelay('medium');
    const { hours, minutes, seconds } = useCountdown();

    return (
        <motion.div 
            variants={slideInVariant('right', 'spring', viewportDelayMd(.2), .5, '20%')}
            {...MotionSettings}    
            className="p-[30px] w-full medium:max-w-[295px] bg-background-secondary backdrop-blur rounded-[20px] font-bold medium:justify-self-end"
        >
            <p className="text-sm font-normal"> Auction ends in: </p>
            <p className="text-3xl flex gap-[10px] justify-between"> 
                <span className="flex flex-col gap-[5px]"> {hours} <span className="text-sm font-space-mono font-normal"> Hours </span> </span>
                {' '}:{' '}
                <span className="flex flex-col gap-[5px]"> {minutes} <span className="text-sm font-space-mono font-normal"> Minutes </span> </span>
                {' '}:{' '}
                <span className="flex flex-col gap-[5px]"> {seconds} <span className="text-sm font-space-mono font-normal"> Seconds </span> </span>
            </p>
            <Button
                onClick={() => {}}
                variant="secondary"
                className="w-full mt-[30px]"
            >
                Place Bid
            </Button>
        </motion.div>
    );
};

export default AutctionTimer