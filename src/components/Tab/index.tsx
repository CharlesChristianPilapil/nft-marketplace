'use client';

import React from "react";

import { formatClassName } from "@/utils/helpers/formatClassName";
import { useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { opacityVariant } from "@/utils/animation/motion";

interface TabItemProps {
    value: string;
    children: ReactNode;
    className?: string;
}

export function TabItem({ children }: TabItemProps) {
    return <>{children}</>;  // Apply className here
}

interface TabContentsProps {
    className?: string;
    children: ReactNode;
}

export const TabContents = ({ className, children }: TabContentsProps) => {
    return <div className={className}> {children} </div>
}

interface TabProps {
    items: { label: string; value: string; count?: string | number }[];
    children: ReactNode;
    disableCount?: boolean;
    background?: 'primary' | 'secondary';
    className?: string;
}

export const Tab = ({ 
    items, 
    children, 
    className, 
    disableCount = false,
    background = 'secondary'
}: TabProps) => {
    const [activeTab, setActiveTab] = useState(items[0]?.value);

    const rows = `grid-cols-${items.length}`;

    return (
        <div className={`w-full ${background === 'primary' ? 'bg-background border-t-background border-b-background' : 'bg-background-secondary border-t-background-secondary border-b-background'} border-y-2 pb-20`}>
            <div role="tablist" className="bg-background mb-20">
                <div className={`grid ${rows} ${className ?? ''}`}>
                    {items.map(({ label, value, count }, index) => (
                        <motion.button
                            variants={opacityVariant(index * 0.2, .5)}
                            initial='initial'
                            whileInView='animate'
                            viewport={{ once: true, amount: .5 }}
                            key={value}
                            id={`tab-${value}`}
                            role="tab"
                            className={formatClassName(`
                                    px-4 py-[18.5px] medium:text-[22px] font-medium transition-all flex gap-1 items-center justify-center w-full relative
                                    before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:transition-all before:ease-in-out
                                    ${activeTab === value ? "before:bg-captions-label text-white" : "before:bg-transparent text-gray-500 hover:text-white"}
                                }`)
                            }
                            disabled={activeTab === value}
                            onClick={() => setActiveTab(value)}
                        >
                            {label}
                            {!disableCount && (
                                <span 
                                    className={formatClassName(`
                                        ${activeTab === value ? 'bg-captions-label' : 'bg-background-secondary'} 
                                        font-space-mono text-white px-[10px] py-[5px] rounded-full transition-all ease-in-out text-[16px] hidden medium:block
                                    `)}
                                > 
                                    {count ?? 0} 
                                </span>    
                            )}
                        </motion.button>
                    ))}
                </div>
            </div>

            {Array.isArray(children) &&
                children.map((child, index) =>
                    (child as React.ReactElement<TabItemProps>).props.value === activeTab && (
                        <div key={index} role="tabpanel" className={(child as React.ReactElement<TabItemProps>).props.className}>
                            {child}
                        </div>
                    )
                )}
        </div>
    );
}