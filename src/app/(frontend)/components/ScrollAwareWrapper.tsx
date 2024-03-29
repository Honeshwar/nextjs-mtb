// "use client";

// import { useEffect, useRef, useState } from "react";
// import ScrollAwareSection from "./ScrollAware";

// export function ScrollAwareSectionWrapper({
//   lazyComponent,
// }: {
//   lazyComponent: React.ReactNode;
// }) {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);
//   useEffect(() => {
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//           observer.unobserve(entry.target);
//         }
//       });
//     });

//     observer.observe(sectionRef.current!);

//     // Cleanup function
//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   return (
//     <ScrollAwareSection
//       lazyComponent={lazyComponent}
//       sectionRef={sectionRef}
//       isVisible={isVisible}
//       //   setIsVisible={setIsVisible}
//     />
//   );
// }
