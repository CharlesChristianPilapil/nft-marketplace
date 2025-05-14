import { useEffect, useState } from "react"

const useScreenSize = () => {
  // Set the initial state based on the current window size
  const [screenSize, setScreenSize] = useState<"small" | "medium" | "large" | "">('');
  const [screenWidth, setScreenWidth] = useState<number>(0);

    useEffect(() => {
        const updateScreenSize = () => {
            const width = window.innerWidth;
            setScreenWidth(width);
            
            if (width >= 1280) {
                setScreenSize("large");
            } else if (width >= 834) {
                setScreenSize("medium");
            } else {
                setScreenSize("small");
            }
        };

        updateScreenSize();

        window.addEventListener("resize", updateScreenSize);

        return () => {
            window.removeEventListener("resize", updateScreenSize);
        };
    }, []);

    return {
        screenSize,
        screenWidth
    };
};

export default useScreenSize