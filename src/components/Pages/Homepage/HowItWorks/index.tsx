'use client';
import InfoCard from "@/components/InfoCard"
import Section from "@/components/Section"
import { INFO_DATA } from "@/utils/constants/info-data"
import useScreenSize from "@/utils/hooks/useScreenSize";

const HowItWorksSection = () => {

    const info_data = INFO_DATA;
    const { screenSize } = useScreenSize();

    return (
        <Section 
            title="How it works"
            sub_title="Find out how to get started"
        >
            <div className="grid gap-5 medium:grid-cols-3 medium:gap-[30px]">
                {info_data.map((data, index) => (
                    <InfoCard 
                        key={index}
                        {...data}
                        delay={screenSize === 'large' ? index * 0.2 : 0}
                    />
                ))}
            </div>
        </Section>
    );
};

export default HowItWorksSection