import PostGrid from "../posts/posts-grid";
import styles from "./featured-post.module.css";

function FeaturedPosts({ posts }) {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
