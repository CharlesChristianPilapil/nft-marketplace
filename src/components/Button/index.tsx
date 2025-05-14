'use client';
import { CustomComponentType } from '@/utils/entities';
import { formatClassName } from '@/utils/helpers/formatClassName';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

interface CommonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  type?: 'filled' | 'outlined';
  className?: string;
  icon?: CustomComponentType;
  children: string;
  animationVariant?: Variants;
  repeatAnimation?: boolean;
}

interface LinkProps {
    href: string;
    onClick?: never;
}

interface ButtonProps {
    onClick: () => void;
    href?: never;
}

type ButtonInterface = CommonProps & (LinkProps | ButtonProps);

const Button = (props: ButtonInterface) => {

    const MotionLink = motion(Link);

    const { 
        variant = 'primary', 
        type = 'filled', 
        className, icon: Icon, 
        children, 
        animationVariant, 
        repeatAnimation = false 
    } = props;

    const baseClasses = formatClassName(`
        ${className ? className : 'px-[50px]'}
        ${variant === 'primary' ? 'h-[72px]' : ''}
        ${variant === 'secondary' ? 'h-[60px]' : ''}
        ${variant === 'tertiary' ? 'h-[46px]' : ''}

        ${type === 'filled' ? 'bg-CTA' : ''}
        ${type === 'outlined' ? 'border border-CTA' : ''}

        rounded-[20px]
    `)

    const content = (
        <span className='flex gap-3 items-center mx-auto w-fit'>
            {Icon && <Icon className={`h-5 w-5 ${type === 'outlined' ? 'text-CTA' : ''}`} />}
            <p className='font-semibold'> {children} </p>
        </span>  
    )

    const motionProps = {
        variants: animationVariant,
        initial: 'initial',
        whileInView: 'animate',
        viewport: { once: !repeatAnimation, amount: 0.25 },
        whileHover: { scale: .95 },
    };

    return ('href' in props) ? (
        <MotionLink 
            {...motionProps}
            href={props.href!} 
            className={baseClasses + ' flex justify-center items-center'}
        >
            {content}
        </MotionLink>
    ) : (
        <motion.button 
            {...motionProps}
            onClick={props.onClick} 
            className={baseClasses}
        >
            {content}
        </motion.button>
    );
};

export default Button