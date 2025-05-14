import { SOCIALS } from "@/utils/constants/socials"
import Image from "next/image";
import Link from "next/link"

const Socials = () => {

    return (
        <ul className="flex gap-[10px]">
            {SOCIALS.map((data, index) => (
                <li key={index}>
                    <Link href={data.url}> 
                        <Image 
                            src={data.icon}
                            alt={data.alt}
                            height={24}
                            width={24}
                            className="large:h-[32px] large:w-[32px]"
                        />
                    </Link>
                </li>
            ))}
        </ul>
    );
};

export default Socials;