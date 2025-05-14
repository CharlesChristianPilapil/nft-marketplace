'use client';
import Image from "next/image";
import InputField from "../InputField";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import { slideInVariant } from "@/utils/animation/motion";

const Newsletter = () => {

    return (
        <section className="py-10 medium:pb-20">
            <div className="grid gap-5 medium:grid-cols-2 medium:gap-8 items-center large:gap-20 box-container medium:bg-background-secondary medium:p-10 large:p-16 rounded-3xl">
                <motion.div 
                    variants={slideInVariant('left', 'spring', .3, .75, '20%')}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: .5 }}
                    className="w-full h-[255px] medium:w-full medium:h-full large:h-[310px] large:w-[425px] relative rounded-2xl overflow-hidden"
                >
                    <Image 
                        src={'/images/newsletter-img.svg'}
                        alt="Astronaut reading newspaper"
                        fill
                        className="object-cover"
                    />
                </motion.div>
                <motion.div 
                    variants={slideInVariant('right', 'spring', .3, .75, '20%')}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: .5 }}
                    className="space-y-5"
                >
                    <div>
                        <h2 className="font-bold text-2xl large:text-3xl"> Join Our Weekly Digest </h2>
                        <p className="large:text-xl"> Get Exclusive Promotions & Updates Straight To Your Inbox. </p>
                    </div>
                    <InputField 
                        icon={Mail}
                        label="Subscribe"
                        placeholder="Enter your email here"
                        collapseBreakpoint="large"
                        withButton
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;