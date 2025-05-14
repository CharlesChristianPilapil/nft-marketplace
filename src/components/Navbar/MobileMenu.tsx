'use client';
import { NAVLINKS } from "@/utils/constants/navlinks";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import Button from "../Button";
import { Text, UserRound } from "lucide-react";
import Link from 'next/link';
import useScreenSize from "@/utils/hooks/useScreenSize";
import { opacityVariant } from "@/utils/animation/motion";

const MobileMenu = () => {

    const links = NAVLINKS;

    const pathName = usePathname();
    const router = useRouter();

    const mobileMenuRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLButtonElement>(null);

    const { screenWidth } = useScreenSize();

    const [toggle, setToggle] = useState<boolean>(false);
    const MotionLink = motion(Link);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const isClickInsideMenu = mobileMenuRef.current?.contains(event.target as Node);
            const isClickOnButton = menuRef.current?.contains(event.target as Node);
        
            if (!isClickInsideMenu && !isClickOnButton) {
                setToggle(false);
            }
        };
    
        if (toggle) {
            document.addEventListener("mousedown", handleClickOutside);
        }
    
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [toggle]);

    useEffect(() => {
        if (toggle) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    
        return () => {
            document.body.style.overflow = '';
        };
    }, [toggle]);

    useEffect(() => {
        if (screenWidth >= 1024 && toggle) {
            setToggle(false);
        }
    }, [screenWidth, toggle]);

    return (
        <>
            <div className="lg:hidden">
                <button ref={menuRef} onClick={() => setToggle(prev => !prev)}>
                    <Text />
                </button>
            </div>
            <AnimatePresence>
                {toggle && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { when: 'beforeChildren' } }}
                        exit={{ opacity: 0 }}
                        className="absolute top-[72px] medium:top-[74px] min-h-[calc(100vh-73px)] w-full left-0 z-10 bg-white bg-black/15 px-5"
                    >
                        <motion.div 
                            initial={{opacity: 0, y: -10}}
                            animate={{opacity: 1, y: 0 }} 
                            ref={mobileMenuRef} 
                            className="bg-background max-w-[375px] mx-auto px-5 p-10 rounded"
                        >
                            <ul className="text-captions-label text-center space-y-5">
                                {links.map((data, index) => (
                                    <li key={data.href}>  
                                        <MotionLink 
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1, transition: { delay: .2 + (index * .1) } }} 
                                            onClick={() => setToggle(prev => !prev)} 
                                            href={data.href} 
                                            className={`${pathName === data.href ? 'pointer-events-none text-white' : ''}`}
                                        >
                                            {data.label}
                                        </MotionLink>
                                    </li>
                                ))}
                            </ul>
                            <Button
                                animationVariant={opacityVariant(.5, .5)}
                                icon={UserRound}
                                onClick={() => {
                                    setToggle(prev => !prev);
                                    router.push('/create-account/')
                                }}
                                className={`${pathName === '/create-account/' ? 'pointer-events-none' : ''} text-white w-full mt-5`}
                            >
                                Sign Up
                            </Button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default MobileMenu;