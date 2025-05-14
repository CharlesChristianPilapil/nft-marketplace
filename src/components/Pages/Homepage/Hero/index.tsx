'use client';
import HomeHeroImage from "./hero-image";
import HomeHeroStats from "./stats";
import HomeHeroTitle from "./title";

const HomeHeroSection = () => {
    return (
        <header className="py-10 medium:py-20 flex items-center box-container min-h-[calc(100vh-64px)] medium:min-h-[calc(100vh-64px)] large:min-h-[calc(100vh-100px)]">
            <div className="grid medium:grid-cols-2 gap-5 lg:gap-[30px]">
                <HomeHeroTitle />
                <HomeHeroImage />
                <HomeHeroStats />
            </div>
        </header>
    );
};

export default HomeHeroSection;