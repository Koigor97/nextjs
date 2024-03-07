import ReactMarkdown from "react-markdown";

import styles from "./post-content.module.css";
import PostHeader from "./post-header";

import { DUMMY_POSTS } from "../../../data/dummyData";

function PostContent() {
  const testData = DUMMY_POSTS.slice(0, 1)[0];
  //   console.log(testData);
  const { image, title, excerpt } = testData;
  const content = `# ${excerpt}`;

  return (
    <article className={styles.content}>
      <PostHeader title={title} image={image} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
