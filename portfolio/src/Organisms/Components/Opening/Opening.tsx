import { useState } from 'react';
import { Opening } from './OpeningAnimation';
import { TypingAnimation } from './OpeningText';

interface OpenWebProps {
  onEnd?: () => void;
}

export const OpenWeb: React.FC<OpenWebProps> = ({ onEnd }) => {
  const [showText, setShowText] = useState(false);
  const handleAnimationEnd = () => {
    setShowText(true);
    console.log('Animation ended');
    if (onEnd) onEnd();
  };

  return (
    <>
      <Opening onEnd={handleAnimationEnd} />
      {showText && <TypingAnimation />}
    </>
  );
};
