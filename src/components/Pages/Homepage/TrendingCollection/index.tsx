import CollectionCard from "@/components/CollectionCard";
import Section from "@/components/Section";
import { TRENDING_COLLECTION } from "@/utils/constants/trending-collection";

const TrendingCollectionSection = () => {
    const collections = TRENDING_COLLECTION;

    return (
        <Section
            title="Trending Collection"
            sub_title="Checkout our weekly updated trending collection."
        >
            <div className="grid medium:grid-cols-2 large:grid-cols-3 mt-[60px] gap-[30px]">
                {collections.map((collection, index) => (
                    <CollectionCard 
                        index={index}
                        key={collection.picture!+collection.user}
                        count={collection.count}
                        images={collection.images}
                        picture={collection.picture!}
                        username={collection.user!}
                        title={collection.title}
                    />
                ))}
            </div>
        </Section>
    );
};

export default TrendingCollectionSection;