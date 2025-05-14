'use client';
import { CreatorIterface, CREATORS } from "@/utils/constants/creators";
import { Tab, TabItem } from "../Tab"
import RankingList from "./RankingList";
import { motion } from "framer-motion";
import { scaleVariant } from "@/utils/animation/motion";

const Rankings = () => {
    const tabs = [
        { label: 'Today', value: 'today', },
        { label: 'This Week', value: 'this_week' },
        { label: 'This Month', value: 'this_month' },
        { label: 'All Time', value: 'all_time' },
    ];

    const randomSort = (data: CreatorIterface[]) => [...data].sort(() => Math.random() - 0.5);

    const today = CREATORS;
    const this_week = randomSort(CREATORS);
    const this_month = randomSort(CREATORS);
    const all_time = randomSort(CREATORS);

    const tabItems = [
        {
            value: 'today',
            list: <RankingList list={today} />
        },
        {
            value: 'this_week',
            list: <RankingList list={this_week} />
        },
        {
            value: 'this_month',
            list: <RankingList list={this_month} />
        },
        {
            value: 'all_time',
            list: <RankingList list={all_time} />
        }
    ]

    return (
        <div>
            <div className="box-container py-10 medium:py-[30px] large:py-20">
                <motion.h2
                    variants={scaleVariant(.2, .5, .95)} 
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: .5 }} 
                    className="text-2xl medium:text-3xl font-semibold"
                > 
                    {'Top Creators'} 
                </motion.h2>
                <motion.p 
                    variants={scaleVariant(.4, .5, .95)} 
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: true, amount: .5 }} 
                    className="text-xl medium:max-w-[343px] large:max-w-full"
                > 
                    {'Check out top ranking NFT artists on the NFT Marketplace.'} 
                </motion.p>
            </div>
            <Tab 
                items={tabs} 
                disableCount 
                background="primary"
                className="bg-background box-container" 
            >
                {tabItems.map((item) => (
                    <TabItem 
                        key={item.value} 
                        value={item.value} 
                        className="box-container grid-cols-4"
                    >
                        {item.list}
                    </TabItem>
                ))}
            </Tab>
        </div>
    );
};

export default Rankings;