import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import MainContainer from '../../components/MainContainer';
import { PostContainer } from '../../components/PostContainer';
import PostCover from '../../components/PostCover';
import PostDetail from '../../components/PostDetail';
import { PostData } from '../../domain/posts/post';

interface PostProps {
  post: PostData;
}

function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <PostCover coverUrl={post.cover.formats.large.url} alt={post.title} />

        <Heading>{post.title}</Heading>
        <PostDetail
          author={post.author.name}
          category={post.category.name}
          date={post.created_at}
        />
        <PostContainer content={post.content} />
      </MainContainer>
      <Footer />
    </>
  );
}

export default Post;
