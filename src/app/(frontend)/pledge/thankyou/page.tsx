"use client";
import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

// Lazy load your component using dynamic import
const LazyLoadedSection = dynamic(() => import("../../components/MemeBank"));

const ScrollAwareSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null) as any;

  //   useEffect(() => {
  //     // console.log(screenTop);
  //     // if (screenTop > sectionRef.current.offsetTop - 500) {
  //     //   setIsVisible(false);
  //     // }

  //     window.onscroll = () => {
  //       const screenTop = window.scrollY;
  //       console.log(screenTop);
  //       if (screenTop > sectionRef.current.offsetTop - 500) {
  //         setIsVisible(true);
  //       }
  //     };

  //     // Cleanup function
  //     return () => {
  //       //   observer.disconnect();
  //     };
  //   });

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(sectionRef.current);

    // Cleanup function
    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <div className="text-3xl h-[120vh]">ScrollAwareSection</div>
      <div ref={sectionRef}>
        {isVisible ? (
          <LazyLoadedSection lang="en" />
        ) : (
          <div style={{ height: "100vh" }}>Waiting to load...</div>
        )}
      </div>
    </>
  );
};

export default ScrollAwareSection;
// import { useState, useEffect, useRef } from 'react';
// import dynamic from 'next/dynamic';

// // Lazy load your component using dynamic import
// const LazyLoadedSection = dynamic(() => import('../components/LazyLoadedSection'));

// const ScrollAwareSection = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   return (
//     <div ref={sectionRef}>
//       {isVisible && <LazyLoadedSection />}
//     </div>
//   );
// };

// export default ScrollAwareSection;
