import styled, { css } from 'styled-components';

export const Container = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.superLarge};
    margin: ${theme.font.sizes.large} 0;
    text-align: center;
  `}
`;
