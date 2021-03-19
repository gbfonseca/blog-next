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
      Publicado em <Date date={date} /> post {author} em {category}
    </Container>
  );
}

export default PostDetails;
