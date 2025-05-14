import NftPageHeroSection from "@/components/Pages/NftPage/Hero";
import NftPageMoreNftSection from "@/components/Pages/NftPage/MoreNfts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "NFT - NFT Marketplace",
    description: "Explore digital assets on the NFT Marketplace.",
};

const NftPage = () => {
    return (
        <>
            <NftPageHeroSection />
            <NftPageMoreNftSection />
        </>
    );
};

export default NftPage;