import { Store } from "lucide-react"
import Link from "next/link"

const NavLogo = () => {
    return (
        <Link href={'/'}>
            <div className="flex items-center gap-3">
                <Store className="text-CTA" />
                <h2 className="text-base medium:text-xl font-space-mono font-semibold"> NFT Marketplace </h2>
            </div>
        </Link>
    )
}

export default NavLogo