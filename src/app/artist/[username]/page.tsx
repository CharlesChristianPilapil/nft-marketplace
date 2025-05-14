import ArtistPageNtftCardsSection from "@/components/Pages/ArtistPage/NftCards";
import UserDetails from "@/components/UserDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Artist - NFT Marketplace",
    description: "Explore digital assets on the NFT Marketplace.",
};

const ArtistPage = async ({ params }: { params: Promise<{ username: string }> }) => {
    const { username } = await params;

    return (
        <>
            <UserDetails username={username} />
            <ArtistPageNtftCardsSection username={username} />
        </>
    );
};

export default ArtistPage;