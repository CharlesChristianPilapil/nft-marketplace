import { slideInVariant } from "@/utils/animation/motion";
import { motion } from "framer-motion";

const HomeHeroTitle = () => {
    return (
        <div className="flex flex-col gap-2 large:gap-5">
            <motion.h1
                variants={slideInVariant('left', 'spring', 0, 0.5, '20%')}
                initial='initial'
                whileInView='animate' 
                viewport={{ once: true }}
                className="text-2xl medium:text-2xl large:text-5xl font-semibold leading-10 medium:leading-[1.1]"
            > 
                Discover Digital Art & Collect Nfts 
            </motion.h1>
            <motion.p 
                variants={slideInVariant('left', 'spring', 0.2, 0.5, '20%')}
                initial='initial'
                whileInView='animate' 
                viewport={{ once: true }}
                className="text-base medium:text-xl leading-9"
            > 
                Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k Nft Artists. 
            </motion.p>
        </div>
    );
};

export default HomeHeroTitle;