import { ReactNode } from "react";

const FooterSection = ({title, children}: { title: string | ReactNode; children: ReactNode }) => {
    return (
        <div className="space-y-6 text-[#cccccc]">
            {typeof title === 'string' ? (
                <h2 className="text-[22px] font-semibold font-space-mono text-default">{title}</h2>
            ) : (
                title
            )}
            {children}
        </div>
    );
};

export default FooterSection