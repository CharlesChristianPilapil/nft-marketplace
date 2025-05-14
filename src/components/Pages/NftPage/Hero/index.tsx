'use client';
import Button from "@/components/Button"
import { NFT_PAGE } from "@/utils/constants/nft-page";
import Image from "next/image"
import Link from "next/link";
import { motion } from "framer-motion";
import { blurVariant, slideInVariant } from "@/utils/animation/motion";
import useViewportDelay from "@/utils/hooks/useViewportDelay";

const MotionImage = motion(Image);
const MotionSettings = {
    initial: 'initial',
    whileInView: 'animate',
    viewport: { once: true, amount: 0.5 }
};

const Description = ({ className }: { className?: string }) => {

    const { user, description } = NFT_PAGE;

    const viewportDelayMd = useViewportDelay('medium');

    return (
        <div className={`${className} space-y-5 2xl:text-xl`}>
            <motion.div 
                variants={slideInVariant('left', 'spring', viewportDelayMd(.4), .5, '20%')}
                {...MotionSettings}
                className="space-y-[10px]"
            >
                <p className="text-captions-label font-space-mono font-semibold"> Created By </p>
                <Link href={`/artist/${user.username}`} className="flex items-center gap-3 w-fit font-semibold">
                    <Image 
                        src={user.avatar ?? ''}
                        alt={`avatar of user ${user.username}`}
                        height={24}
                        width={24}
                    />
                    <p> {user.username} </p>
                </Link>
            </motion.div>
            <motion.div 
                variants={slideInVariant('left', 'spring', viewportDelayMd(.4), .5, '20%')}
                {...MotionSettings}
                className="space-y-[10px]"
            >
                <p className="text-captions-label font-space-mono font-semibold"> Description </p>
                <p className="whitespace-pre-line">
                    {description}
                </p>
            </motion.div>
        </div>
    )
}

const NftPageHeroSection = () => {
    const { title, created_at } = NFT_PAGE;
    const viewportDelayMd = useViewportDelay('medium');

    return (
        <header>
            <div className="w-full h-[320px] medium:h-[420px] large:h-[560px] relative overflow-hidden">
                <MotionImage 
                    variants={blurVariant(0, .5, '20px')}
                    {...MotionSettings}
                    src={'/images/NFTs/cover.svg'}
                    alt="Person on space sitting on a ship while looking at the moon."
                    fill
                    className="object-cover"
                />
            </div>
            <div className="box-container py-10">
                <div className="grid medium:grid-cols-[365px_1fr] large:grid-cols-[605px_1fr] medium:justify-between gap-5">
                    <div className="space-y-[30px]">
                        <motion.div
                            variants={slideInVariant('left', 'spring', viewportDelayMd(.2), .5, '20%')}
                            {...MotionSettings} 
                            className="space-y-[10px]"
                        >
                            <h1 className="text-2xl medium:text-3xl large:text-4xl font-semibold leading-[120%]"> {title} </h1>
                            <p className="text-captions-label 2xl:text-xl"> Minted on {created_at} </p>
                        </motion.div>
                        <Description className="hidden medium:block"/>
                    </div>
                    <div>
                        <motion.div 
                            variants={slideInVariant('right', 'spring', viewportDelayMd(.2), .5, '20%')}
                            {...MotionSettings}    
                            className="p-[30px] w-full medium:max-w-[295px] bg-background-secondary backdrop-blur rounded-[20px] font-bold medium:justify-self-end"
                        >
                            <p className="text-sm font-normal"> Auction ends in: </p>
                            <p className="text-3xl flex gap-[10px] justify-between"> 
                                <span className="flex flex-col gap-[5px]"> 23 <span className="text-sm font-space-mono font-normal"> Hours </span> </span>
                                {' '}:{' '}
                                <span className="flex flex-col gap-[5px]"> 59 <span className="text-sm font-space-mono font-normal"> Minutes </span> </span>
                                {' '}:{' '}
                                <span className="flex flex-col gap-[5px]"> 59 <span className="text-sm font-space-mono font-normal"> Seconds </span> </span>
                            </p>
                            <Button
                                onClick={() => {}}
                                variant="secondary"
                                className="w-full mt-[30px]"
                            >
                                Place Bid
                            </Button>
                        </motion.div>
                    </div>
                    <Description className="medium:hidden"/>
                </div>
            </div>
        </header>
    )
}
export default NftPageHeroSection