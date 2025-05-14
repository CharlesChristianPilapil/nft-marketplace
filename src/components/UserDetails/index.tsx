'use client';
import { findCreator } from "@/utils/helpers/find-creator"
import Image from "next/image";
import Button from "../Button";
import { Copy, Plus } from "lucide-react";
import Socials from "../Socials";
import { motion } from "framer-motion";
import { scaleVariant, slideInVariant } from "@/utils/animation/motion";
import useScreenSize from "@/utils/hooks/useScreenSize";

const UserDetails = ({username}: { username: string }) => {
    const user = findCreator(username);
    const defaultUser = findCreator('animalkid');
    const { screenSize } = useScreenSize();

    const MotionImage = motion(Image);

    const default_viewport = { once: true, amount: .5 };

    const stats = [
        { label: 'Volume', value: '250k+' },
        { label: 'NFTs Sold', value: '50+' },
        { label: 'Followers', value: '3000+' },
    ];

    return (
        <header>
            <div className="relative h-[250px] medium:h-[280px] large:h-[320px] overflow-hidden">
                <MotionImage
                    initial={{
                        filter: 'blur(20px)',
                    }}
                    whileInView={{
                        filter: 'blur(0)',
                        transition: {
                            delay: 0,
                            duration: .5
                        }
                    }}
                    viewport={default_viewport}
                    src={'/images/user-cover.svg'}
                    alt={user?.username ?? defaultUser?.username + ' cover'}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="box-container flex justify-center medium:justify-start">
                <MotionImage 
                    variants={scaleVariant(.2, .5, .75)}
                    initial='initial'
                    whileInView='animate'
                    viewport={default_viewport}
                    src={user?.image ?? defaultUser?.image ?? ''}
                    alt={user?.username ?? defaultUser?.username + ' avatar'}
                    height={120}
                    width={120}
                    className="-mt-[80px] z-10 ring ring-CTA rounded-full"
                />
            </div>
            <div className="my-10 box-container space-y-[30px]">
                <div className="flex flex-col gap-[30px] large:justify-between large:items-center large:flex-row">
                    <motion.h2 
                        variants={slideInVariant('left', 'spring', .4, .5, '20%')}
                        initial='initial'
                        whileInView='animate'
                        viewport={default_viewport}
                        className="text-2xl medium:text-3xl large:text-4xl font-semibold"
                    > 
                        {username ?? defaultUser?.username}
                    </motion.h2>
                    <motion.div 
                        variants={slideInVariant('right', 'spring', .6, .5, '20%')}
                        initial='initial'
                        whileInView='animate'
                        viewport={default_viewport}
                        className="flex gap-5 flex-col medium:flex-row"
                    >
                        <Button
                            icon={Copy}
                            onClick={() => {}}
                            variant="secondary"
                            className="px-5"
                            
                        >
                            0xc0E3...B79C
                        </Button>
                        <Button
                            icon={Plus}
                            onClick={() => {}}
                            variant="secondary"
                            className="px-[30px]"
                            type="outlined"
                            
                        >
                            Follow
                        </Button>
                    </motion.div>
                </div>
                <div className="grid grid-cols-3 gap-5 max-w-[510px] font-space-mono text-sm sm:text-base large:text-xl">
                    {stats.map((data, index) => (
                        <motion.p 
                            variants={scaleVariant((index * .2) + (screenSize !== 'small' ? .8 : 0), .5, .75)}
                            initial='initial'
                            whileInView='animate'
                            viewport={default_viewport}
                            key={index} 
                            className="flex flex-col"
                        >  
                            <span className=" large:text-2xl font-semibold"> {data.value} </span>
                            {data.label}
                        </motion.p>
                    ))}
                </div>
                <motion.div 
                    variants={slideInVariant('left', 'spring', screenSize !== 'small' ? 1.4 : .5, .5, '20%')}
                    initial='initial'
                    whileInView='animate'
                    viewport={default_viewport}
                    className="space-y-[10px] large:text-xl"
                >
                    <h3 className="text-[#858584] font-semibold font-space-mono"> Bio </h3>
                    <p> {`The internet's friendliest designer kid.`} </p>
                </motion.div>
                <motion.div 
                    variants={slideInVariant('left', 'spring', screenSize !== 'small' ? 1.6 : .5, .5, '20%')}
                    initial='initial'
                    whileInView='animate'
                    viewport={default_viewport}
                    className="space-y-[10px] large:text-xl"
                >
                    <h3 className="text-[#858584] font-semibold font-space-mono"> Links </h3>
                    <Socials />
                </motion.div>
            </div>
        </header>
    );
};

export default UserDetails