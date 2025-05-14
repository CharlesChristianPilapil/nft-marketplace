'use client';
import { ComponentType, ReactNode } from "react";
import Button from "../Button";
import { slideInVariant } from "@/utils/animation/motion";
import { motion } from "framer-motion";

interface SectionBaseProps {
    title: string;
    sub_title?: string;
    children: ReactNode;
}

type SectionWithoutButton = SectionBaseProps & {
    isButtonVariant?: false;
};

type SectionWithButton = SectionBaseProps & {
    isButtonVariant: true;
    icon: ComponentType<{ className?: string }>;
    href: string;
    button_label: string;
};
  
type SectionProps = SectionWithoutButton | SectionWithButton;

const Section = (props: SectionProps) => {
    const { children, sub_title, title } = props;

    const ButtonComponent = ({ isSmallScreen = false }: { isSmallScreen?: boolean }) => {
        if (!('isButtonVariant' in props) || !props.isButtonVariant) return null;
    
        const { icon: Icon, href, button_label } = props;

        return (
            <Button
                variant="secondary"
                icon={Icon}
                type="outlined"
                className={`${isSmallScreen ? 'medium:hidden mt-[30px]' : 'hidden medium:flex px-14'}`}
                href={href}
                animationVariant={slideInVariant('right', "spring", .6, .5, '20%')}
            >
                {button_label}
            </Button>
        );
    };

    return (
        <section className="box-container py-10 large:py-20">
            <div className="flex w-full justify-between items-end mb-10 large:mb-[60px]">
                <div>
                    <motion.h2 
                        variants={slideInVariant('left', 'spring', .2, .5, '20%')}
                        initial='initial'
                        whileInView='animate'
                        viewport={{ once: true, amount: .25 }}
                        className="text-2xl medium:text-3xl font-semibold"
                    > 
                        {title} 
                    </motion.h2>
                    {sub_title && (
                        <motion.p 
                            variants={slideInVariant('left', 'spring', .4, .5, '20%')}
                            initial='initial'
                            whileInView='animate'
                            viewport={{ once: true, amount: .25 }}
                            className="text-xl medium:max-w-[343px] large:max-w-full"
                        > 
                            {sub_title} 
                        </motion.p>
                    )}
                </div>
                <ButtonComponent />
            </div>
            {children}
            <ButtonComponent isSmallScreen />
        </section>
    );
};

export default Section;