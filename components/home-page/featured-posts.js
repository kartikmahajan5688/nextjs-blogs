import React from "react";
import classes from "./featured-posts.module.css";
import PostsGrid from "../posts/posts-grid";

const FeaturedPosts = (props) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <div>
        <PostsGrid posts={props.posts} />
      </div>
    </section>
  );
};

export default FeaturedPosts;
