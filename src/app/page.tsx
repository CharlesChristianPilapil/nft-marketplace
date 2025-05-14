import BrowseCategoriesSection from "@/components/BrowseCategoriesSection";
import Newsletter from "@/components/Newsletter";
import NftHighlightSection from "@/components/NftHighlight";
import DiscoverMoreSection from "@/components/Pages/Homepage/DiscoverMore";
import HomeHeroSection from "@/components/Pages/Homepage/Hero";
import HowItWorksSection from "@/components/Pages/Homepage/HowItWorks";
import TopRatedArtistSection from "@/components/Pages/Homepage/TopRatedArtist";
import TrendingCollectionSection from "@/components/Pages/Homepage/TrendingCollection";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Home - NFT Marketplace",
    description: "Explore digital assets on the NFT Marketplace.",
};

export default function Home() {
    return (
        <> 
            <HomeHeroSection />
            <TrendingCollectionSection />
            <TopRatedArtistSection />
            <BrowseCategoriesSection />
            <DiscoverMoreSection />
            <NftHighlightSection />
            <HowItWorksSection />
            <Newsletter />
        </>
    );
}