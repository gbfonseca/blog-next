import { ReactNode } from 'react';

import { Container } from './styles';

interface PostCoverProps {
  coverUrl: string;
  alt: string;
}

function PostCover({ coverUrl, alt }: PostCoverProps) {
  return <Container src={coverUrl} alt={alt} />;
}

export default PostCover;
