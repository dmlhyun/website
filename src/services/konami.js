import { useState, useEffect } from 'react';

const VALID_CODE_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "a",
  "b",
  "Enter",
];

export const useKonamiCode = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const konamiCodeLastPosition = VALID_CODE_SEQUENCE.length;

  useEffect(() => {
    const upHandler = ({ key }) => {
      if (VALID_CODE_SEQUENCE[currentPosition] !== key) {
        setCurrentPosition(0);
      } else {
        setCurrentPosition(currentPosition + 1);
      }
    };

    window.addEventListener("keyup", upHandler);
    return () => {
      window.removeEventListener("keyup", upHandler);
    };
  });

  if (konamiCodeLastPosition <= currentPosition) {
    setCurrentPosition(0)
  }
  return konamiCodeLastPosition === currentPosition;
};