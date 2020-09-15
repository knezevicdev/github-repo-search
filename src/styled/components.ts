import styled from 'styled-components';
import colors from 'styled/colors';

export const Link = styled.a`
  color: ${colors.blue};
  text-decoration: none;
  border: 0;
  background-color: 0;
  cursor: pointer;

  &:hover,
  &:active,
  &:focus {
    text-decoration: underline;
  }

  em {
    font-weight: bold;
  }
`;
