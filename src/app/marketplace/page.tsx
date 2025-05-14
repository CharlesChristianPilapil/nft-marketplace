import MarketplaceNftTabSections from "@/components/Pages/Marketplace/NftTab"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Marketplace - NFT Marketplace",
    description: "Explore digital assets on the NFT Marketplace.",
};

const MarketplacePage = () => {
    return (
        <>
            <MarketplaceNftTabSections />
        </>
    )
}
export default MarketplacePage