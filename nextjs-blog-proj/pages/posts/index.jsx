import AllPosts from "../../components/posts/all-posts";

import { DUMMY_POSTS } from "../../data/dummyData";

function AllPostPage() {
  return (
    <div>
      <AllPosts posts={DUMMY_POSTS} />
    </div>
  );
}

export default AllPostPage;
