import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children, id, className = "", animation = "fadeInUp" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animations = {
    fadeInUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } }
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -10, scale: 0.9 },
      visible: { opacity: 1, rotate: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }
    }
  };

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={typeof animation === "string" ? animations[animation] : animation}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
