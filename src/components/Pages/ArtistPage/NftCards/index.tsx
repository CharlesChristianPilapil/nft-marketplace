'use client';
import NftCard from "@/components/NftCard";
import { Tab, TabItem } from "@/components/Tab";
import { CREATED_NFT, DISCOVER } from "@/utils/constants/discover";
import { findCreator } from "@/utils/helpers/find-creator";
import useScreenSize from "@/utils/hooks/useScreenSize";

const ArtistPageNftCardsSection = ({ username }: { username: string }) => {
    const { screenSize } = useScreenSize();
    const NFTs = [...DISCOVER, ...CREATED_NFT];
    const creator = findCreator(username);
    const defaultCreator = findCreator('animalkid');

    const getDisplayCount = () => {
        if (screenSize === "small") return 3;
        if (screenSize === "medium") return 6;
        return NFTs.length; 
    };

    const tabs = [
        { label: 'Created', value: 'created', count: 302 },
        { label: 'Owned', value: 'owned' },
        { label: 'Collection', value: 'collection' },
    ];

    return (
        <div>
            <Tab items={tabs} className="box-container">
                <TabItem value="created" className="grid gap-[30px] medium:grid-cols-2 large:grid-cols-3 box-container">
                    {NFTs.slice(0, getDisplayCount()).map((nft, index) => (
                        <NftCard 
                            key={index}
                            title={nft.title}
                            img={nft.img}
                            price={nft.price}
                            highest_bid={nft.highest_bid}
                            profile_picture={creator?.image ?? defaultCreator?.image}
                            username={creator?.username ?? defaultCreator?.username}
                            variant="dark"
                        />
                    ))}
                </TabItem>
                <TabItem value="owned" className="box-container">
                    <p> No items available. </p>
                </TabItem>
                <TabItem value="collection" className="box-container">
                    <p> No items available. </p>
                </TabItem>
            </Tab>
        </div>
    );
};

export default ArtistPageNftCardsSection;
