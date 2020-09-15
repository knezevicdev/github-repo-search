import styled, { css } from 'styled-components';
import colors from 'styled/colors';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

type TabProps = {
  active?: boolean;
};

export const Tab = styled.button<TabProps>`
  background-color: transparent;
  border: 0;
  padding: 14px 5px 10px 5px;
  cursor: pointer;
  outline: none;
  position: relative;
  color: ${colors.black2};

  &::after {
    content: '';
    display: block;
    bottom: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: ${colors.orange1};
    position: absolute;
    opacity: 0;

    ${({ active }) =>
      active &&
      css`
        opacity: 1;
      `}
  }

  &:hover::after,
  &:active::after,
  &:focus::after {
    opacity: 1;

    ${({ active }) =>
      !active &&
      css`
        background-color: ${colors.orange2};
      `}
  }
`;
