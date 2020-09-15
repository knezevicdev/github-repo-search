import styled, { keyframes } from 'styled-components';
import colors from 'styled/colors';

export const Wrapper = styled.div`
  width: 310px;
  border: 1px solid ${colors.gray1};
  top: 1rem;
  margin-bottom: 1rem;
  left: 50%;
  position: relative;
  transform: translateX(-50%);
`;

export const Filter = styled.div`
  padding: 10px 10px 0 10px;
  background-color: ${colors.gray2};
  border-bottom: 1px solid ${colors.gray1};
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(-50%, -50%, 0);

  border-top: 2px solid grey;
  border-right: 2px solid grey;
  border-bottom: 2px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  position: fixed;
  top: 50%;
  left: 50%;
`;
