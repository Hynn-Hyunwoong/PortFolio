import styled from 'styled-components';
import { blink } from './Animation';

export const TypingText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  font-size: 4rem;
`;

export const Cursor = styled.span`
  animation: ${blink} is infinite;
`;
