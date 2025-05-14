import ArtistCard from "@/components/ArtistCard";
import { CREATORS } from "@/utils/constants/creators";

const ArtistList = () => {

    const creators = CREATORS.sort((a, b) => Number(a.rank) - Number(b.rank));

    return (
        <ul className="grid medium:grid-cols-2 large:grid-cols-4 gap-5 medium:gap-[30px] mb-10">
            {creators.map((user, index) => (
                <ArtistCard 
                    key={index}
                    artist={user}
                    variant="tab"
                />
            ))}
        </ul>
    );
};

export default ArtistList;