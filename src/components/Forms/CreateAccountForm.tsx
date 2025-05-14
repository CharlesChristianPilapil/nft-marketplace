'use client';
import { UserRound, Mail, LockKeyhole } from "lucide-react"
import Button from "../Button"
import InputField from "../InputField"
import SplitLayoutForm from "./SplitLayoutForm"
import { motion } from "framer-motion";
import { slideInVariant } from "@/utils/animation/motion";
import useScreenSize from "@/utils/hooks/useScreenSize";

const CreateAccountForm = () => {

    const { screenSize } = useScreenSize();

    const inputFields = [
        { icon: UserRound, placeholder: "Username" },
        { icon: Mail, placeholder: "Email Address" },
        { icon: LockKeyhole, placeholder: "Password" },
        { icon: LockKeyhole, placeholder: "Confirm Password" },
    ];

    const MotionSettings = {
        initial: 'initial',
        whileInView: 'animate',
        viewport: { once: true, amount: .5 }
    }

    return (
        <SplitLayoutForm
            image="/images/create-account.svg"
            alt="create account figure"
        >
            <div className="pt-[30px] pb-10 px-[30px] space-y-[30px] max-w-[375px] medium:py-20 medium:space-y-10 medium:px-0 medium:max-w-fit mx-auto medium:mx-0">
                <div className="medium:max-w-[325px] large:max-w-[460px] space-y-5">
                    <motion.h2
                        variants={slideInVariant('right', 'spring', 0, .5, '20%')}
                        {...MotionSettings}
                        className="text-3xl large:text-4xl font-bold"
                    > 
                        Create account 
                    </motion.h2>
                    <motion.p 
                        variants={slideInVariant('right', 'spring', 0.2, .5, '20%')}
                        {...MotionSettings}
                        className="large:text-xl"
                    > 
                        Welcome! Enter Your Details And Start Creating, Collecting And Selling Nfts. 
                    </motion.p>
                </div>
                <div className="medium:max-w-[325px] large:max-w-[330px] space-y-[30px]">
                    <div className="space-y-[15px]">
                        {inputFields.map((field, index) => (
                            <motion.div 
                                variants={slideInVariant('right', 'spring', screenSize !== 'small' ? (index * 0.2) + 0.4  : 0.2, .5, '20%')}
                                {...MotionSettings}
                                key={index}
                            >
                                <InputField 
                                    icon={field.icon}
                                    placeholder={field.placeholder}
                                />
                            </motion.div>
                        ))}
                    </div>
                    <Button
                        animationVariant={slideInVariant('right', 'spring', screenSize !== 'small' ? 1.2 : 0.2, .5, '20%')}
                        onClick={() => {}}
                        variant="tertiary"
                        className="w-full"
                    >
                        Create Account
                    </Button>
                </div>
            </div>
        </SplitLayoutForm>
    );
};

export default CreateAccountForm;