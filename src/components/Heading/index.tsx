import { ReactNode } from 'react';

import { Container } from './styles';

interface HeadingProps {
  children: ReactNode;
}

function Heading({ children }: HeadingProps) {
  return <Container>{children}</Container>;
}

export default Heading;
