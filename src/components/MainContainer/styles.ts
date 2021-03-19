import styled, { css } from 'styled-components';

export const Container = styled.main`
  max-width: 96rem;
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.medium};
  `}
  margin: 0 auto;
`;
