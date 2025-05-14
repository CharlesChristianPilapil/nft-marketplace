import CreateAccountForm from "@/components/Forms/CreateAccountForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Account - NFT Marketplace",
    description: "Explore digital assets on the NFT Marketplace.",
};

const CreateAccountPage = () => {
    return (
        <>
            <CreateAccountForm />
        </>
    )
}

export default CreateAccountPage;