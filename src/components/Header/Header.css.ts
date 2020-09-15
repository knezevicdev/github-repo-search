import styled from 'styled-components';
import colors from 'styled/colors';

export const Wrapper = styled.div`
  padding: 10px;
  background-color: ${colors.gray3};
  color: ${colors.black1};
  font-weight: bold;
  border-bottom: 1px solid ${colors.gray1};
`;

export const Badge = styled.div`
  background-color: ${colors.gray4};
  color: white;
  font-weight: bold;
  padding: 3px 5px;
  display: inline-flex;
  border-radius: 9px;
`;
