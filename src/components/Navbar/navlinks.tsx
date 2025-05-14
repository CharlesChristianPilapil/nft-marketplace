'use client';
import { NAVLINKS } from "@/utils/constants/navlinks"
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = () => {

    const links = NAVLINKS;

    const pathName = usePathname();

    return (
        <ul className="hidden lg:flex gap-[10px] items-center">
            {links.map((link) => (
                <li key={link.label} className="px-5">
                    <Link 
                        href={link.href}
                        className={`${pathName === link.href ? 'pointer-events-none text-white' : ''} hover:scale-95 block transition-all ease-in-out`}
                    > 
                        {link.label} 
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;