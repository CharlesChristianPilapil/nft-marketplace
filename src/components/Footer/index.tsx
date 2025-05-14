'use client';
import { NAVLINKS } from "@/utils/constants/navlinks"
import FooterSection from "./FooterSection"
import Link from "next/link"
import { Store } from "lucide-react"
import InputField from "../InputField"
import Socials from "../Socials";
import { usePathname } from "next/navigation";

const Footer = () => {

    const pathName = usePathname();

    return (
        <footer className="py-10 bg-background-secondary space-y-[50px]">
            <div className="flex flex-col large:flex-row gap-9 w-full justify-between box-container">
                <FooterSection 
                    title={
                        <Link href={'/'} className="w-fit block text-default">
                            <div className="flex items-center gap-3">
                                <Store className="text-CTA" />
                                <h2 className="text-[22px] font-space-mono font-semibold"> NFT Marketplace </h2>
                            </div>
                        </Link>
                    }
                >
                    <div className="space-y-5">
                        <p className="large:max-w-[236px]"> NFT marketplace UI created with Anima for Figma. </p>
                        <div className="space-y-4">
                            <p> Join our community </p>
                            <Socials />
                        </div>
                    </div>
                </FooterSection>

                <FooterSection title='Explore'>
                    <ul className="space-y-5">
                        {NAVLINKS.map((data, index) => (
                            <li key={index}>
                                <Link className={`${pathName === data.href ? 'pointer-events-none text-white' : ''} hover:scale-[1.1] block transition-all duration-200 origin-left`} href={data.href}> 
                                    {data.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </FooterSection>

                <FooterSection title='Join our weekly digest'>
                    <div className="space-y-5">
                        <p className="large:max-w-[320px]"> 
                            Get exclusive promotions & updates straight to your inbox. 
                        </p>
                        <InputField 
                            placeholder="enter your email here"
                            collapseBreakpoint="medium" 
                            label="Subscribe"  
                            withButton
                        />
                    </div>
                </FooterSection>
            </div>
            <p className="border-t border-[#cccccc] box-container text-sm pt-5">
                Ⓒ NFT Market. Use this template freely.
            </p>
        </footer>
    )
}
export default Footer