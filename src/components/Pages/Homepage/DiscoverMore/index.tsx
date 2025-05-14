'use client';
import NftCard from "@/components/NftCard";
import Section from "@/components/Section";
import { DISCOVER } from "@/utils/constants/discover";
import { ROUTES } from "@/utils/constants/pages";
import { EyeIcon } from "lucide-react";

const DiscoverMoreSection = () => {
    
    return (
        <Section
            isButtonVariant
            title="Discover More Nfts"
            sub_title="Explore New Trending Nfts"
            icon={EyeIcon}
            button_label="See All"
            href={ROUTES.MARKETPLACE}
        >
            <div className="grid medium:grid-cols-2 large:grid-cols-3 gap-[30px]">
                {DISCOVER.map((nft, index) => (
                    <NftCard 
                        key={index}
                        title={nft.title}
                        img={nft.img}
                        price={nft.price}
                        highest_bid={nft.highest_bid}
                        profile_picture={nft.profile_picture}
                        username={nft.username}
                        isHidden={index === 2}
                    />
                ))}
            </div>
        </Section>
    );
};

export default DiscoverMoreSection;