interface Post {
    id: number;
    title: string;
}

interface Blog {
    id: number;
    name: string;
    posts: Post[];
}

export interface UserModel {
    id: number;
    username: string;
    blogs: Blog[];
    posts: Post[];
}

export const posts: Post[] = [
    {
        id: 1,
        title: "Post1"
    },
    {
        id: 2,
        title: "Post2"
    },
    {
        id: 3,
        title: "Post3"
    }
];

export const blogs: Blog[] = [
    {
        id: 1,
        name: "Blog1",
        posts: [posts[0], posts[1]]
    },
    {
        id: 2,
        name: "Blog2",
        posts: [posts[2], posts[1]]
    },
    {
        id: 3,
        name: "Blog3",
        posts: [posts[2]]
    }
];

export const users: UserModel[] = [
    {
        id: 1,
        username: "Greg",
        blogs: [blogs[0], blogs[1]],
        posts: posts.slice()
    },
    {
        id: 2,
        username: "Max",
        blogs: [blogs[2], blogs[1]],
        posts: posts.slice(1)
    },
    {
        id: 3,
        username: "Alex",
        blogs: [blogs[0]],
        posts: []
    },
    {
        id: 4,
        username: "Alan",
        blogs: [blogs[2], blogs[0]],
        posts: posts.slice(2)
    }
];
