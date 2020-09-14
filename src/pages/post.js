import React from "react";
import Layout from '../components/shared/Layout';
import { useParams } from 'react-router-dom';
import Post from './../components/post/Post';
import MorePostsFromUser from './../components/post/MorePostsFromUser';

const PostPage = () => {
  const {postId} = useParams();

  return (
    <Layout>
      <Post id={postId}/>
      <MorePostsFromUser />
    </Layout>
  )
}

export default PostPage;
