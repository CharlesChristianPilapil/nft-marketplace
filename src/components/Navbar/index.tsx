'use client';
import { UserRound } from "lucide-react";
import Button from "../Button";
import NavLogo from "./logo";
import NavLinks from "./navlinks";
import { ROUTES } from "@/utils/constants/pages";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const Navbar = () => {

    const pathName = usePathname();

    return (
        <nav>
            <div className="px-[30px] medium:px-[50px] py-5 flex justify-between items-center text-captions-label relative">
                <NavLogo />
                <div className="hidden lg:flex items-center gap-[10px]">
                    <NavLinks />
                    <Button
                        variant="secondary" 
                        icon={UserRound}
                        className={`${pathName === '/create-account/' ? 'pointer-events-none' : ''} text-white px-[30px]`}
                        href={ROUTES.CREATE_ACCOUNT}
                    > 
                        Sign up 
                    </Button>
                </div>
                <MobileMenu />
            </div>
        </nav>
    )
};

export default Navbar;