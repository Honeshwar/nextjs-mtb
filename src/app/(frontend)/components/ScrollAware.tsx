// "use client";
// import React, { useState, useEffect, useRef } from "react";

// const ScrollAwareSection = ({
//   lazyComponent,
//   fallbackUI,
// }: {
//   lazyComponent: React.ReactNode;
//   fallbackUI: React.ReactNode;
// }) => {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null) as any;

//   useEffect(() => {
//     // const observer = new IntersectionObserver((entries) => {
//     //   entries.forEach((entry) => {
//     //     if (entry.isIntersecting) {
//     //       setIsVisible(true);
//     //       observer.unobserve(entry.target);
//     //     }
//     //   });
//     // });

//     // observer.observe(sectionRef.current!);

//     // Cleanup function
//     console.log("section offset", sectionRef.current.offsetTop);
//     if (sectionRef.current.offsetTop < window.screen.height) {
//       setIsVisible(true);
//     }
//     // window.onscroll = () => {
//     //   console.log(
//     //     "onscroll event trigger",
//     //     Math.floor(window.scrollY),
//     //     " section offset",
//     //     sectionRef.current.offsetTop
//     //   );
//     //   if (window.scrollY === sectionRef.current.offsetTop) {
//     //     setIsVisible(true);
//     //   }
//     // };
//     return () => {
//       //   observer.disconnect();
//     };
//   }, []);

//   return <div ref={sectionRef}>{isVisible ? lazyComponent : fallbackUI}</div>;
// };

// export default ScrollAwareSection;

import React, { useState, useEffect, useRef } from "react";

const ScrollAwareSection = ({
  lazyComponent,
  fallbackUI,
}: {
  lazyComponent: React.ReactNode;
  fallbackUI: React.ReactNode;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          console.log("first,", entry);
          if (entry.isIntersecting) {
            //isIntersecting
            setIsVisible(true);
            observer.unobserve(entry.target);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return <div ref={sectionRef}>{isVisible ? lazyComponent : null}</div>;
};

export default ScrollAwareSection;
