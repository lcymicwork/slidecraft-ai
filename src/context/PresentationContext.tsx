import React, { createContext, useContext, useState } from 'react';

type PresentationContextType = {
  slides: string[];
  addSlide: () => void;
  removeSlide: (index: number) => void;
  updateSlide: (index: number, content: string) => void;
};

const PresentationContext = createContext<PresentationContextType | undefined>(
  undefined
);

export const PresentationProvider: React.FC = ({ children }) => {
  const [slides, setSlides] = useState<string[]>(['']);

  const addSlide = () => {
    setSlides([...slides, '']);
  };

  const removeSlide = (index: number) => {
    setSlides(slides.filter((_, i) => i !== index));
  };

  const updateSlide = (index: number, content: string) => {
    const newSlides = [...slides];
    newSlides[index] = content;
    setSlides(newSlides);
  };

  return (
    <PresentationContext.Provider
      value={{ slides, addSlide, removeSlide, updateSlide }}
    >
      {children}
    </PresentationContext.Provider>
  );
};

export const usePresentation = () => {
  const context = useContext(PresentationContext);
  if (!context) {
    throw new Error(
      'usePresentation must be used within a PresentationProvider'
    );
  }
  return context;
};