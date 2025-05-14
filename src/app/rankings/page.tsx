import Rankings from "@/components/Rankings";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rankings - NFT Marketplace",
    description: "Explore digital assets on the NFT Marketplace.",
};

const RankingsPage = () => {
    return (
        <Rankings />
    );
};

export default RankingsPage;