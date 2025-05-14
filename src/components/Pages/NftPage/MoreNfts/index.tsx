'use client';
import NftCard from "@/components/NftCard";
import Section from "@/components/Section"
import { NFT_PAGE } from "@/utils/constants/nft-page";
import { findCreator } from "@/utils/helpers/find-creator";
import useScreenSize from "@/utils/hooks/useScreenSize";
import { ArrowRight } from "lucide-react"

const NftPageMoreNftSection = () => {
    const { screenSize } = useScreenSize();

    const { more_nft } = NFT_PAGE;
    const defaultCreator = findCreator('BeKind2Robots');

    const getDisplayCount = () => {
        if (screenSize === "small") return 3;
        if (screenSize === "medium") return 6;
        return more_nft.length; 
    };

    return (
        <Section
            isButtonVariant
            title="More from this artist"
            button_label="Go To Artist Page"
            href="/artist/BeKind2Robots"
            icon={ArrowRight}
        >
            <div className="grid medium:grid-cols-3 gap-[30px]">
                {more_nft.slice(0, getDisplayCount()).map((nft, index) => (
                    <NftCard 
                        key={index}
                        title={nft.title}
                        img={nft.img}
                        price={nft.price}
                        highest_bid={nft.highest_bid}
                        profile_picture={defaultCreator?.image}
                        username={defaultCreator?.username}
                        variant="light"
                    />
                ))}
            </div>
        </Section>
    )
}
export default NftPageMoreNftSection