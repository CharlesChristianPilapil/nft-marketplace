'use client';
import { CATEGORY } from "@/utils/constants/category";
import CategoryCard from "../CategoryCard";
import Section from "../Section";
import { motion } from "framer-motion";
import { scaleVariant } from "@/utils/animation/motion";
import { BOX_SHADOW } from "@/utils/constants/style";

const BrowseCategoriesSection = () => {

    return (
        <Section title="Browse Categories">
            <ul className="grid grid-cols-2 medium:grid-cols-4 gap-5 medium:gap-[30px]">
                {CATEGORY.map((category, index) => (
                    <motion.li 
                        layout
                        variants={scaleVariant(.2, .3, .75)}
                        initial='initial'
                        whileInView='animate'
                        whileHover={{ scale: .95, boxShadow: BOX_SHADOW.CTA, transition: { delay: 0 } }}
                        viewport={{ once: true, amount: .5 }}
                        key={index} 
                        className="shadow-gray-900 drop-shadow-md rounded-[20px]"
                    >
                        <CategoryCard 
                            src={category.src}
                            icon={category.icon}
                            category={category.category}
                        />
                    </motion.li>
                ))}
            </ul>
        </Section>
    );
};

export default BrowseCategoriesSection