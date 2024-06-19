import classes from "./posts-grid.module.css";
import PostItem from "./post-item";

export default function PostGrid(props) {
  return (
    <ul className={classes.grid}>
      {props.posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}
