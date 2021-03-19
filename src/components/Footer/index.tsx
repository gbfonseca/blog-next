import { ReactNode } from 'react';
import Link from 'next/link';
import { SITE_NAME } from '../../config/app-config';

import { Container } from './styles';

interface FooterProps {
  children: ReactNode;
}

function Footer() {
  return <Container>Feito com carinho por Gabriel Fonseca</Container>;
}

export default Footer;
