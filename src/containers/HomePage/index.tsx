import Header from '../../components/Header';
import { PostData } from '../../domain/posts/post';
import MainContainer from '../../components/MainContainer';
import { Category, Container } from './styles';
import PostCard from '../../components/PostCard';
import Footer from '../../components/Footer';
import Head from 'next/head';
import { SITE_NAME } from '../../config/app-config';

export type HomePageProps = {
  posts: PostData[];
  category?: string;
};

function HomePage({ posts, category }: HomePageProps) {
  return (
    <>
      <Head>
        <title>{SITE_NAME}</title>
        <meta name="description" content="Este é meu blog de tecnologia" />
      </Head>
      <Header />
      <MainContainer>
        {category && <Category>Categoria: {category}</Category>}

        <Container>
          {posts.map((post) => (
            <PostCard
              key={post.id}
              cover={post?.cover?.formats?.small?.url}
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
