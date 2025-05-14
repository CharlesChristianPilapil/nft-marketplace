import ArtistPageNtftCardsSection from "@/components/Pages/ArtistPage/NftCards";
import UserDetails from "@/components/UserDetails";

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