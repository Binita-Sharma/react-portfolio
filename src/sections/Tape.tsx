"use client"

import StarIcon from '@assets/icons/star.svg';
import { useEffect, useRef } from 'react';


const words = [

  "Accessible",
  "Responsive",
  "Customizable",
  "Friendly",
  "Innovative",
  "Intuitive",
  "Efficient",
  "User-Centric",
  "Scalable",
  "Usable",
  "Reliable",
  "Secure",
  "Modern",
  "Future-oriented",

];

export const TapeSection = () => {

  const tapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tape = tapeRef.current;
    if (!tape) return;

    const tapeContent = tape.firstElementChild as HTMLElement | null;
    if (!tapeContent) return;

    // Clone the content for seamless looping
    tapeContent.innerHTML += tapeContent.innerHTML;

    const duration = 20000; // Animation duration in ms

    const animate = () => {
      // Reset position without animation
      tapeContent.style.transition = 'none';
      tapeContent.style.transform = 'translateX(0)';
      
      // Force reflow before starting animation
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          tapeContent.style.transition = `transform ${duration}ms linear`;
          tapeContent.style.transform = 'translateX(-50%)';
        });
      });
    };

    animate();
    const interval = setInterval(animate, duration);

    return () => clearInterval(interval);
  }, []);


  return (
  <div className="py-16 lg:py-24 overflow-hidden relative">

    <div
 ref={tapeRef}
        className="relative h-20 bg-gradient-to-r from-emerald-300 to-sky-400 
                   border-y border-indigo-500/30 shadow-lg shadow-indigo-500/10 
                   rotate-[-2deg] -mx-4 overflow-hidden">
                          
      <div className="flex [mask-image:linear-gradient
      (to_right,transparent,black_10%,black_90%,transparent)]">

    <div className="flex w-max items-center h-full animate-infinite-scroll gap-4 py-3">
{[...words, ...words].map((word, index) => (  

<div key={`${word}-${index}`} className="inline-flex items-center px-6 gap-4 h-full ">
              <span className="text-gray-900 uppercase font-bold text-sm md:text-base">
                {word}
              </span>
              <StarIcon className="size-6 text-gray-900 animate-pulse -rotate-12"/>
            </div>  
            ))}
    </div>
    </div>
    </div>
  </div>
  );
};
