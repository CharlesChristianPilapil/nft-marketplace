'use client';
import { CreatorIterface } from "@/utils/constants/creators";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { opacityVariant, scaleVariant } from "@/utils/animation/motion";
import { BOX_SHADOW } from "@/utils/constants/style";

interface ArtistCardInterface {
    variant: 'tab' | 'list';
    artist: CreatorIterface;
}

const ArtistCard = ({
    variant,
    artist
}: ArtistCardInterface) => {

    const MotionLink = motion(Link);
    const MotionImage = motion(Image);

    if (variant === 'tab') {
        return (
            <li 
                className={`
                    ${Number(artist.rank) > 5 && Number(artist.rank) <= 6 ? 'hidden medium:block' : ''} 
                    ${Number(artist.rank) > 6 ? 'hidden large:block' : ''} 
                `}
            > 
                <MotionLink 
                    variants={opacityVariant(.3, .5)}
                    initial='initial'
                    whileInView='animate'
                    whileHover={{ scale: .95, boxShadow: BOX_SHADOW.CTA }}
                    viewport={{ once: true, amount: .5 }}
                    href={`/artist/${artist.username}`}
                    className="inline-block rounded-[20px] w-full"
                >
                    <div className="flex large:flex-col gap-5 bg-background-secondary p-5 rounded-[20px]">
                        <div className="grid large:place-items-center relative">
                            <p className="absolute top-0 left-0 bg-background text-captions-label px-[10px] py-[4px] rounded-full text-sm"> {artist.rank} </p>
                            <MotionImage
                                variants={scaleVariant(.8, .5, .5)}
                                viewport={{ once: true }}
                                src={artist.image}
                                alt={artist.username+'image'}
                                className="large:h-[120px] large:w-[120px] h-[60px] w-[60px] ml-[5px] large:ml-0"
                            />
                        </div>
                        <div className="flex flex-col large:items-center large:gap-[5px] w-full">
                            <h3 className="font-semibold text-xl"> {artist.username} </h3>
                            <p className="flex large:block text-center justify-between w-full"> 
                                <span className="text-captions-label"> Total Sales: </span> 
                                <span className="font-space-mono font-semibold"> {artist.total_sales} </span> 
                            </p>
                        </div>
                    </div>
                </MotionLink>
            </li>
        )
    } 
    
    else {
        return (
            <div> List </div>
        )
    }
};

export default ArtistCard;