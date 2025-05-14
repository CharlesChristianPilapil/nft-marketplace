import ConnectWalletForm from "@/components/Forms/ConnectWalletForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Connect Wallet - NFT Marketplace",
    description: "Connect your wallet to NFT Marketplace.",
};

const ConnectAWalletPage = () => {
    return (
        <ConnectWalletForm />
    );
};

export default ConnectAWalletPage;