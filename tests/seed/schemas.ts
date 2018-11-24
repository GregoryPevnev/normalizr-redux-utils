import { schema } from "normalizr";

const { Entity } = schema;

export const Post = new Entity("posts", {});

export const Blog = new Entity("blogs", {
    posts: [Post]
});

export const User = new Entity("users", {
    blogs: [Blog],
    posts: [Post]
});
