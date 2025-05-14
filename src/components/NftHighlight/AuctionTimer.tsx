import { slideInVariant } from "@/utils/animation/motion"
import { useCountdown } from "@/utils/Context/CountdownContext";
import { motion } from "framer-motion"

const AuctionTimer = () => {
    const { hours, minutes, seconds } = useCountdown();

    return (
        <motion.div 
            variants={slideInVariant('right', 'spring', 0, .5, '20%')}
            initial='initial'
            whileInView='animate'
            viewport={{ once: true, amount: .5 }}
            className="p-[30px] w-full medium:max-w-[295px] bg-background-secondary/50 backdrop-blur rounded-[20px] font-bold"
        >
            <p className="text-sm font-normal"> Auction ends in: </p>
            <p className="text-3xl flex gap-[10px] justify-between"> 
                <span className="flex flex-col gap-[5px]"> {hours} <span className="text-sm font-space-mono font-normal"> Hours </span> </span>
                {' '}:{' '}
                <span className="flex flex-col gap-[5px]"> {minutes} <span className="text-sm font-space-mono font-normal"> Minutes </span> </span>
                {' '}:{' '}
                <span className="flex flex-col gap-[5px]"> {seconds} <span className="text-sm font-space-mono font-normal"> Seconds </span> </span>
            </p>
        </motion.div>
    )
}
export default AuctionTimer