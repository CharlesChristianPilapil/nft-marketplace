import { CategoryCardInterface } from "@/utils/constants/category";
import { ROUTES } from "@/utils/constants/pages";
import Link from "next/link";
import Image from "next/image";

const CategoryCard = (props: CategoryCardInterface) => {

    const {icon: Icon, src, category } = props;

    return (
        <Link href={`${ROUTES.MARKETPLACE}?category=${category}`}>
            <div className="rounded-[20px] overflow-hidden h-full">
                <div className="relative">
                    <Icon className="absolute h-[100px] w-[100px] top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-10" />
                    <Image 
                        src={src}
                        alt={category + ' category'}
                        className="w-full blur-sm"
                    />
                </div>
                <div className="py-5 px-5 large:px-[30px] bg-background-secondary text-base large:text-xl h-full font-semibold z-10 relative">
                    <h3> {category} </h3>
                </div>
            </div>
        </Link>
    );
};

export default CategoryCard;