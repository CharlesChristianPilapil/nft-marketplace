import useScreenSize from "./useScreenSize";

type TriggerSize = 'medium' | 'large';

const useViewportDelay = (trigger: TriggerSize) => {
    const { screenSize } = useScreenSize();
  
    return (value: number): number => {
  
      if (trigger === 'medium') {
        return screenSize !== 'small' ? value : 0;
      }
  
      if (trigger === 'large') {
        return screenSize === 'large' ? value : 0;
      }
  
      return 0;
    };
};

export default useViewportDelay;