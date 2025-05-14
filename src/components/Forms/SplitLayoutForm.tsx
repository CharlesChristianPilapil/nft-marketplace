'use client';
import { blurVariant } from "@/utils/animation/motion";
import { motion } from "framer-motion";
import Image from "next/image"
import { ReactNode } from "react"

interface SplitLayoutFormInterface {
    children: ReactNode;
    image: string;
    alt: string
}

const SplitLayoutForm = ({
    children,
    image,
    alt
}: SplitLayoutFormInterface) => {

    const MotionImage = motion(Image);

    return (
        <section className="grid medium:grid-cols-2 medium:gap-10 large:gap-[60px]">
            <div className="w-full h-[232px] medium:h-full relative overflow-hidden">
                <MotionImage
                    variants={blurVariant(0, .5, '20px')}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: .5 }} 
                    src={image ?? '/images/create-account.svg'}
                    alt={alt ?? 'create account figure'}
                    fill
                    className="object-cover"   
                />
            </div>
            {children}
        </section>
    )
}
export default SplitLayoutForm