import { Suspense } from 'react';
import { useLoaderData, defer, Await } from 'react-router-dom';
import Posts from '../components/Posts.jsx';
import { getSlowPosts } from '../util/api.js';

function DeferredBlogPosts() {
  const loaderData = useLoaderData();
  return (
    <>
      <h1>Our Slow Blog Posts </h1>
      <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={loaderData.posts}
          errorElement={<p>Error loading blog posts. </p>}
        >
          {(loadedPost) => <Posts blogPosts={loadedPost} />}
        </Await>
      </Suspense>
    </>
  );
}

export default DeferredBlogPosts;

export async function loader() {
  // return defer({posts: getSlowPosts(), data: await getNotPosts() }); for dashboard for example
  return defer({ posts: getSlowPosts() });
}
