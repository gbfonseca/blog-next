import { ReactNode } from 'react';
import { formatDate } from '../../utils/format-date';

import { Container } from './styles';

interface DateProps {
  date: string;
}

function Date({ date }: DateProps) {
  return <Container>{formatDate(date)}</Container>;
}

export default Date;
