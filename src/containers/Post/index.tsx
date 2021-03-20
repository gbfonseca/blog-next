import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import MainContainer from '../../components/MainContainer';
import { PostContainer } from '../../components/PostContainer';
import PostCover from '../../components/PostCover';
import PostDetail from '../../components/PostDetail';
import { PostData } from '../../domain/posts/post';
import Head from 'next/head';
import { SITE_NAME } from '../../config/app-config';
import { removeHtml } from '../../utils/remove-html';
interface PostProps {
  post: PostData;
}

function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>
          {post.title} - {SITE_NAME}
        </title>
        <meta
          name="description"
          content={removeHtml(post.content).slice(0, 150)}
        />
      </Head>
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
