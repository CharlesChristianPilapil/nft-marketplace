import { NftCardInterface } from "@/utils/constants/discover";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { opacityVariant } from "@/utils/animation/motion";
import { BOX_SHADOW } from "@/utils/constants/style";

interface ExtendedInterface extends NftCardInterface {
    isHidden?: boolean;
    variant?: 'dark' | 'light'
}

const NftCard = ({
    img,
    title,
    price,
    highest_bid,
    username,
    profile_picture,
    isHidden,
    variant = 'light',
}: ExtendedInterface) => {

    const MotionLink = motion(Link);

    return (
        <MotionLink 
            href={`/nft/${title}`} 
            variants={opacityVariant(.2, .3)}
            className={`${isHidden ? 'medium:hidden large:block' : ''} rounded-2xl`}
            initial='initial'
            whileInView='animate'
            whileHover={{ scale: .95, boxShadow: BOX_SHADOW.CTA }}
            exit={{ opacity: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            layout
        >
            <div className={`${variant === 'light' ? 'bg-background-secondary' : 'bg-background'} rounded-2xl`}>
                <div className="relative aspect-420/296">
                    <Image 
                        src={img} 
                        alt={title+' NFT'} 
                        fill
                        className="object-cover rounded-t-2xl"
                    />
                </div>
                <div className="px-5 py-5 large:px-[30px]">
                    <h3 className="text-xl font-semibold mb-1"> {title} </h3>
                    <div className="flex gap-x-3">
                        <Image 
                            src={profile_picture!} 
                            alt={'user '+username} 
                            width={24}
                            height={24}
                            className="h-6 w-6"
                        />
                        <h4 className="font-space-mono"> {username} </h4>
                    </div>
                </div>
                <div className="px-5 pb-5 large:px-[30px] flex justify-between">
                    <div>
                        <p className="text-captions-label text-sm"> Price </p>
                        <h5 className="font-space-mono"> {price} </h5>
                    </div>
                    <div className="text-end">
                        <p className="text-captions-label text-sm"> Highest Bid </p>
                        <h5 className="font-space-mono"> {highest_bid} </h5>
                    </div>
                </div>
            </div>
        </MotionLink>
    );
};

export default NftCard;