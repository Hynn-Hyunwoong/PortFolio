import { useState, useEffect } from 'react';
import { Cursor, TypingText } from './Styled/Text';

export const TypingAnimation: React.FC = () => {
  const [text, setText] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const fullText = 'HYYUNWOONG 에 대해 알아보기';

  useEffect(() => {
    let i = 0;
    const typing = setInterval(() => {
      if (i < fullText.length) {
        setText((prevText) => prevText + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typing);
        setTypingDone(true);
      }
    }, 200);
    return () => clearInterval(typing);
  }, []);

  return (
    <>
      <TypingText>
        {text}
        {!typingDone && <Cursor>|</Cursor>}
      </TypingText>
    </>
  );
};
