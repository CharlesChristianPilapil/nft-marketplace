'use client';
import Link from "next/link";
import Image from "next/image";
import { CreatorIterface } from "@/utils/constants/creators";
import { AnimatePresence, motion } from "framer-motion";
import { scaleVariant } from "@/utils/animation/motion";

interface Props {
    list: CreatorIterface[];
}

const RankingList = ({ list }: Props) => {

    const MotionLink = motion(Link)

    return (
        <div className="space-y-5">
            <AnimatePresence>
                <motion.div
                    variants={scaleVariant(.2, .3, .75)}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: .5 }} 
                    exit={{ opacity: 0 }}
                    className="flex justify-between items-center gap-5 px-5 text-sm medium:text-[16px] border border-background-secondary rounded-lg py-3 font-space-mono text-captions-label"
                >
                    <div className="text-center h-[30px] w-[30px] flex items-center justify-center"> # </div>
                    <div className="flex-1"> Artist </div>
                    <div className="large:flex-1 gap-5 grid [@media(max-width:400px)]:grid-cols-[repeat(1,_70px)] grid-cols-[repeat(1,_100px)] medium:grid-cols-[repeat(2,_100px)] large:grid-cols-3">
                        <div className="hidden medium:block"> Change </div>
                        <div className="hidden large:block"> NFTs Sold </div>
                        <div> Volume </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="popLayout">
                {list.map((creator, index) => (
                    <MotionLink
                        variants={scaleVariant(.2, .3, .75)}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true, amount: .5 }} 
                        exit={{ opacity: 0 }}
                        key={index}
                        href={`/artist/${creator.username}`} 
                        className="flex items-center justify-between gap-3 medium:gap-5 px-5 bg-background-secondary py-3 rounded-3xl"
                    >
                        <span className="bg-background-secondary text-center h-[30px] w-[30px] flex items-center justify-center rounded-full">
                            {index + 1}
                        </span>
                        <div className="flex-1 medium:font-semibold text-sm medium:text-xl flex items-center gap-1 medium:gap-5">
                            <Image 
                                alt={`${creator.username} avatar`}
                                src={creator.image}
                                height={24}
                                width={24}
                                className="large:h-[60px] large:w-[60px]"
                            />
                            {creator.username}
                        </div>
                        <div className="text-sm medium:text-[16px] font-space-mono large:flex-1 gap-5 grid [@media(max-width:400px)]:grid-cols-[repeat(1,_70px)] grid-cols-[repeat(1,_100px)] medium:grid-cols-[repeat(2,_100px)] large:grid-cols-3">
                            <p className="hidden medium:block text-[#00AC4F]"> +1.41% </p>
                            <p className="hidden large:block"> 602 </p>
                            <p> 12.4 ETH </p>
                        </div>
                    </MotionLink>
                ))}
            </AnimatePresence>
        </div>
    )
}

export default RankingList