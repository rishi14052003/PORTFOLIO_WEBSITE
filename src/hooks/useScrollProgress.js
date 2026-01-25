import { useScroll, useTransform } from 'framer-motion';

export const useScrollProgress = (elementRef) => {
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start 0.8", "end 0.2"]
  });

  return scrollYProgress;
};
