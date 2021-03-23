import Link from 'next/link';
import { ReactNode } from 'react';
import Date from '../Date';

import { Container } from './styles';

interface PostDetailsProps {
  date: string;
  author: string;
  category: string;
}

function PostDetails({ date, author, category }: PostDetailsProps) {
  return (
    <Container>
      Publicado em <Date date={date} /> por {author} em{' '}
      <Link href={`/categories/${category.toLowerCase()}`}>
        <a>{category}</a>
      </Link>
    </Container>
  );
}

export default PostDetails;
