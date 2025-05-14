'use client';
import { scaleVariant } from "@/utils/animation/motion";
import { InfoDataType } from "@/utils/constants/info-data";
import { BOX_SHADOW } from "@/utils/constants/style";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const InfoCard = ({ title, image, description, delay = 0 }: InfoDataType & { delay?: number }) => {
    
    const MotionImage = motion(Image);
    
    const staggerVariant: Variants = {
        initial: { opacity: 0, y: '-20%' },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.2,
                when: 'beforeChildren',
                duration: .75,
                delay,
                type: 'spring'
            }
        },
        hovering: {
            scale: .95,
            boxShadow: BOX_SHADOW.CTA,
        }
    };
    
    return (
        <motion.article 
            variants={staggerVariant}
            initial='initial'
            whileInView='animate'
            whileHover='hovering'
            viewport={{ once: true, amount: .5 }}
            className="flex medium:flex-col bg-background-secondary items-center gap-5 rounded-3xl p-5 medium:pb-[30px] medium:pt-[10px] medium:px-[25px] large:px-[30px]"
        >
            <MotionImage 
                variants={scaleVariant(0, .3, .75)}
                src={image.src}
                alt={image.alt}
                height={250}
                width={250}
                className="w-[100px] medium:mx-auto medium:w-full"
            />
            <div className="space-y-[10px] medium:text-center">
                <motion.h3
                    variants={scaleVariant(0.2, .3, .75)}
                    className="large:text-[20px] font-semibold"
                > 
                    {title} 
                </motion.h3>
                <motion.p
                    variants={scaleVariant(0.4, .3, .75)}
                    className="text-sm large:text-[16px]"
                > 
                    {description} 
                </motion.p>
            </div>
        </motion.article>
    );
};

export default InfoCard;