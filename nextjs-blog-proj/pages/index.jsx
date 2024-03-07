import Hero from "../components/homepage/Hero";
import FeaturedPosts from "../components/homepage/featured-post";

import { DUMMY_POSTS } from "../data/dummyData";
// title, image, excerpt, date, slug
const dummyPosts = DUMMY_POSTS.slice(0, 4);

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={dummyPosts} />
    </>
  );
}

export default HomePage;
