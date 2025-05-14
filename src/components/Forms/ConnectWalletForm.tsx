'use client';
import Image from "next/image";
import SplitLayoutForm from "./SplitLayoutForm"
import { motion } from "framer-motion";
import { slideInVariant } from "@/utils/animation/motion";
import useScreenSize from "@/utils/hooks/useScreenSize";

const ConnectWalletForm = () => {

    const walletOptions = [
        { label: "Metamask", icon: "/images/Metamask.svg" },
        { label: "Wallet Connect", icon: "/images/WalletConnect.svg" },
        { label: "Coinbase", icon: "/images/Coinbase.svg" },
    ];

    const MotionSettings = {
        initial: 'initial',
        whileInView: 'animate',
        viewport: { once: true, amount: .5 }
    }

    const { screenSize } = useScreenSize();

    return (
        <SplitLayoutForm
            image="/images/create-account.svg"
            alt="create account figure"
        >
            <div className="pt-[30px] pb-10 px-[30px] space-y-[30px] max-w-[375px] medium:py-20 medium:space-y-10 medium:px-0 medium:max-w-fit mx-auto medium:mx-0">
                <div className="medium:max-w-[320px] large:max-w-[460px] space-y-5">
                    <motion.h2 
                        variants={slideInVariant('right', 'spring', 0, .5, '20%')}
                        {...MotionSettings}
                        className="text-3xl large:text-4xl font-bold"
                    > 
                        Connect wallet 
                    </motion.h2>
                    <motion.p 
                        variants={slideInVariant('right', 'spring', 0.2, .5, '20%')}
                        {...MotionSettings}
                        className="large:text-xl"
                    > 
                        Choose a wallet you want to connect. There are several wallet providers. 
                    </motion.p>
                </div>
                <div className="medium:max-w-[320px] space-y-[30px]">
                    <div className="flex flex-col items-start gap-5 text-xl">
                        {walletOptions.map((wallet, index) => (
                            <motion.button
                                variants={slideInVariant('right', 'spring', screenSize !== 'small' ?  (index * 0.2) + .2 : 0.2, .5, '20%')}
                                {...MotionSettings}
                                key={wallet.label}
                                className="flex items-center gap-5 py-[14px] large:py-4 bg-background-secondary border border-CTA rounded-xl w-full px-10"
                            >
                                <Image 
                                src={wallet.icon}
                                alt={`${wallet.label.toLowerCase()} icon`}
                                height={32}
                                width={32}
                                />
                                {wallet.label}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>
        </SplitLayoutForm>
    )
}
export default ConnectWalletForm