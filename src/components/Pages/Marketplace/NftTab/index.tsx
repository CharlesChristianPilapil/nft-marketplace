'use client';

import NftCard from "@/components/NftCard";
import { Tab, TabItem } from "@/components/Tab";
import { scaleVariant } from "@/utils/animation/motion";
import { MARKETPLACE } from "@/utils/constants/marketplace";
import useScreenSize from "@/utils/hooks/useScreenSize";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import React, { useState } from "react";

const MarketplaceNftTabSections = () => {
    const { screenSize } = useScreenSize();
    const { NFTs, title, subtitle } = MARKETPLACE;

    const [searchQuery, setSearchQuery] = useState("");

    const getDisplayCount = () => {
        if (screenSize === "small") return 3;
        if (screenSize === "medium") return 6;
        return NFTs.length; 
    };

    const tabs = [
        { label: 'NFTs', value: 'nfts', count: 302 },
        { label: 'Collection', value: 'collection' },
    ];

    const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const searchValue = formData.get("search") as string;
        setSearchQuery(searchValue);
    };

    const filteredNFTs = NFTs.filter((nft) =>
        nft.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        nft.username?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <div className="box-container py-10 medium:py-[30px] large:py-20">
                <motion.h2 
                    variants={scaleVariant(.2, .5, .95)} 
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: .5 }}
                    className="text-2xl medium:text-3xl font-semibold"
                > 
                    {title} 
                </motion.h2>
                <motion.p 
                    variants={scaleVariant(.4, .5, .95)} 
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: .5 }}
                    className="text-xl medium:max-w-[343px] large:max-w-full"
                > 
                    {subtitle} 
                </motion.p>
                <motion.form
                    variants={scaleVariant(.6, .5, .95)} 
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: .5 }}
                    onSubmit={handleSearchSubmit} 
                    className="flex items-center gap-4 border-[1px] border-captions-label/50 rounded-2xl px-5 py-[18px] mt-[30px]"
                >
                    <input 
                        type="text"
                        name="search"
                        className="bg-transparent outline-none w-full text-captions-label" 
                        placeholder="Search your favourite NFTs"
                    />
                    <button>
                        <Search className="h-6 w-6" />
                    </button>
                </motion.form>
            </div>
            <Tab items={tabs} className="box-container">
                <TabItem value="nfts" className="grid gap-[30px] medium:grid-cols-2 large:grid-cols-3 box-container">
                    <AnimatePresence>
                        {filteredNFTs.length === 0 ? (
                            <p>No items available.</p>
                        ) : (
                            filteredNFTs.slice(0, getDisplayCount()).map((nft, index) => (
                                <NftCard 
                                    key={index}
                                    title={nft.title}
                                    img={nft.img}
                                    price={nft.price}
                                    highest_bid={nft.highest_bid}
                                    profile_picture={nft.profile_picture}
                                    username={nft.username}
                                    variant="dark"
                                />
                            ))
                        )}
                    </AnimatePresence>
                </TabItem>
                <TabItem value="collection" className="box-container">
                    <p> No items available. </p>
                </TabItem>
            </Tab>
        </div>
    );
};

export default MarketplaceNftTabSections;