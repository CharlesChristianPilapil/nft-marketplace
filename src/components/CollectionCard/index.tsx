'use client';
import { ROUTES } from "@/utils/constants/pages";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface CollectionCardInterface {
    images: { src: string; title: string }[];
    username: string;
    picture: string;
    count: number | string;
    title: string;
    index: number;
};

const CollectionCard = ({
    username,
    picture,
    images,
    title,
    count,
    index
}: CollectionCardInterface) => {

    const slicedImages = images.length > 2 ? images.slice(1, 3) : [images[0], images[0]];

    const MotionLink = motion(Link);

    const staggerVatiant = {
        animate: { transition: { delayChildren: .5, staggerChildren: 0.2 } }
    };

    const imageVariant: Variants = {
        initial: { opacity: 0, translateY: '20%' },
        animate: { opacity: 1, translateY: 0, transition: { duration: 1 } }
    }

    const descriptionVariant = {
        variants: {
            initial: { opacity: 0, translateX: '20%' },
            animate: { opacity: 1, translateX: 0 }
        },
        initial: 'initial',
        whileInView: 'animate'
    }

    return (
        <article className={`${index === 2 ? 'medium:hidden large:block' : ''}`}>
            <motion.div
                variants={staggerVatiant} 
                initial='initial'
                whileInView='animate'
                viewport={{ once: true, amount: .5 }}
                className="grid grid-cols-3 gap-[15px]"
            >
                <MotionLink variants={imageVariant} href={'nft/'+images[0].title} className={`col-span-3`}>
                    <Image 
                        src={images[0].src}
                        alt={images[0].title+'-image'}
                    />
                </MotionLink>
                {slicedImages.map((image, index) => (
                    <MotionLink variants={imageVariant} key={`${image.title}-${index}`} href={'nft/' + image.title}>
                        <Image 
                            src={image.src}
                            alt={`${image.title}-image`}
                        />
                    </MotionLink>
                ))}
                <MotionLink variants={imageVariant} href={ROUTES.MARKETPLACE}>
                    <div className="bg-CTA rounded-2xl grid place-items-center font-semibold text-xl font-space-mono h-full">
                        <p> {count}+ </p>
                    </div>
                </MotionLink>
            </motion.div>
            <div className="mt-[15px]">
                <motion.h3
                    {...descriptionVariant}
                    viewport={{ once: true }}
                    transition={{ delay: .3, duration: .2 }}
                    className="font-semibold text-xl"
                > 
                    {title} 
                </motion.h3>
                <MotionLink 
                    {...descriptionVariant}
                    viewport={{ once: true }}
                    transition={{ delay: .3, duration: .2 }}
                    href={'artist/'+username} 
                    className="flex items-center gap-3 mt-[10px] w-fit"
                >
                    <Image 
                        src={picture}
                        alt={username+'picture'}
                        className="h-6 w-6"
                    />
                    <h4> {username} </h4>
                </MotionLink>
            </div>
        </article>
    )
};

export default CollectionCard;