'use client';
import { Rocket } from "lucide-react"
import ArtistList from "./artist-list";
import { ROUTES } from "@/utils/constants/pages";
import Section from "@/components/Section";

const TopRatedArtistSection = () => {
    return (
        <Section
            isButtonVariant
            title="Top Creators"
            sub_title="Checkout Top Rated Creators on the NFT Marketplace"
            icon={Rocket}
            button_label="View Rankings"
            href={ROUTES.RANKINGS}
        >
            <ArtistList />
        </Section>
    );
};

export default TopRatedArtistSection;