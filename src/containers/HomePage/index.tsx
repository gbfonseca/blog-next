import Header from '../../components/Header';
import { PostData } from '../../domain/posts/post';
import MainContainer from '../../components/MainContainer';
import { Container } from './styles';
import PostCard from '../../components/PostCard';
import Footer from '../../components/Footer';

export type HomePageProps = {
  posts: PostData[];
};

function HomePage({ posts }: HomePageProps) {
  return (
    <>
      <Header />
      <MainContainer>
        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              cover={post.cover.formats.small.url}
              slug={post.slug}
              title={post.title}
            ></PostCard>
          ))}
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
}

export default HomePage;
