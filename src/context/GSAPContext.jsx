import { createContext, useContext , useRef } from 'react';
import gsap from 'gsap';
import React from 'react';
const GSAPContext = createContext();

export const GSAPProvider = ({ children }) => {
  const staggerCards = (elements) => {
    gsap.fromTo(
      elements,
      { 
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      }
    );
  };

  return (
    <GSAPContext.Provider value={{ staggerCards }}>
      {children}
    </GSAPContext.Provider>
  );
};

export const useGSAP = () => useContext(GSAPContext);
