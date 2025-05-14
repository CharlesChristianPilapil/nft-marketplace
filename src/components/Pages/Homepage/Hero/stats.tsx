'use client';
import Button from "@/components/Button";
import { slideInVariant } from "@/utils/animation/motion";
import { ROUTES } from "@/utils/constants/pages";
import { STATISTICS } from "@/utils/constants/statistics";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const HomeHeroStats = () => {

    const staggerVariant = {
        animate: { transition: { delayChildren: .6, staggerChildren: 0.2 } }
    };

    return (
        <div className="flex flex-col gap-10 medium:gap-5">
            <Button
                variant="secondary"
                icon={Rocket}
                className="medium:w-fit px-[50px]"
                href={ROUTES.CREATE_ACCOUNT}
                animationVariant={slideInVariant("left", "spring", .4, .5, '20%')}
                repeatAnimation={false}
            >
                Get Started
            </Button>
            <motion.ul 
                variants={staggerVariant}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-[30px] w-full"
            >
                {STATISTICS.map((value) => (
                    <motion.li 
                        variants={{
                            initial: { opacity: 0, translateX: '-20%' },
                            animate: { opacity: 1, translateX: 0 }
                        }}
                        key={value.label}
                    >
                        <h2 className="text-xl lg:text-2xl font-semibold font-space-mono"> {value.count}+ </h2> 
                        <p className="text-[18px] large:text-[24px]"> {value.label} </p> 
                    </motion.li>
                ))}
            </motion.ul>
        </div>
    )
};

export default HomeHeroStats;