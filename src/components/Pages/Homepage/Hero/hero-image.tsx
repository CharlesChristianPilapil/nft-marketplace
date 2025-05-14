import Image from "next/image";
import heroImage from '@images/hero-image.gif';
import { motion } from "framer-motion";
import { slideInVariant } from "@/utils/animation/motion";

const HomeHeroImage = () => {

    const MotionImage = motion(Image);

    return (
        <div className="row-span-2">
            <MotionImage
                variants={slideInVariant('right', 'spring', 0, .5, '20%')}
                initial='initial'
                whileInView='animate'
                viewport={{ once: true }}
                src={heroImage} 
                alt="Hero Image"
                priority
            />
        </div>
    );
};

export default HomeHeroImage;
