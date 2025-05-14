'use client';
import { findCreator } from "@/utils/helpers/find-creator"
import Image from "next/image";
import Link from "next/link"
import Button from "../Button";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";
import { slideInVariant } from "@/utils/animation/motion";

const NftHighlightSection = () => {

    const user = findCreator('shroomie');
    const MotionLink = motion(Link);

    return (
        <section className="h-[590px] medium:h-[630px] relative bg-[url('/images/nft-highlight-bg.svg')] bg-cover bg-center flex items-end pb-10 medium:pb-[60px]">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#a259ff]" />
            <div className="box-container relative z-10 w-full flex flex-col gap-[30px] medium:flex-row medium:justify-between items-end">
                <div className="space-y-[30px]">
                    <MotionLink 
                        variants={slideInVariant('left', 'spring', 0, .5, '20%')}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true, amount: .5 }}
                        href={`/artist/${user?.username}`} 
                        className="flex items-center gap-3 bg-background py-3 px-5 w-fit rounded-full"
                    >
                        <Image 
                            src={user?.image ?? ''}
                            alt={`${user?.username} avatar`}
                            height={24}
                            width={24}
                            className="rounded-full"
                        />
                        {user?.username}
                    </MotionLink>
                    <motion.h2 
                        variants={slideInVariant('left', 'spring', 0, .5, '20%')}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true, amount: .5 }}
                        className="text-3xl large:text-4xl font-semibold"
                    > 
                        Magic Mushrooms 
                    </motion.h2>
                    <Button
                        variant="secondary"
                        type="outlined"
                        onClick={() => {}}
                        className="bg-default text-background border-0 w-full medium:w-fit px-[50px] hidden medium:flex"
                        icon={Eye}
                        animationVariant={slideInVariant('left', 'spring', 0, .5, '20%')}
                    >
                        See Nft
                    </Button>
                </div>
                <motion.div 
                    variants={slideInVariant('right', 'spring', 0, .5, '20%')}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: .5 }}
                    className="p-[30px] w-full medium:max-w-[295px] bg-background-secondary/50 backdrop-blur rounded-[20px] font-bold"
                >
                    <p className="text-sm font-normal"> Auction ends in: </p>
                    <p className="text-3xl flex gap-[10px] justify-between"> 
                        <span className="flex flex-col gap-[5px]"> 23 <span className="text-sm font-space-mono font-normal"> Hours </span> </span>
                        {' '}:{' '}
                        <span className="flex flex-col gap-[5px]"> 59 <span className="text-sm font-space-mono font-normal"> Minutes </span> </span>
                        {' '}:{' '}
                        <span className="flex flex-col gap-[5px]"> 59 <span className="text-sm font-space-mono font-normal"> Seconds </span> </span>
                    </p>
                </motion.div>

                <Button
                    variant="secondary"
                    type="outlined"
                    onClick={() => {}}
                    className="bg-default text-background border-0 w-full medium:w-fit px-[50px] medium:hidden"
                    icon={Eye}
                    animationVariant={slideInVariant('left', 'spring', 0, .5, '20%')}
                >
                    See Nft
                </Button>
            </div>
        </section>
    )
}
export default NftHighlightSection