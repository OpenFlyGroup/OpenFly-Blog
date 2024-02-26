"use client";
import Post from "@/components/ui/News/Post/Post";
import { useActions } from "@/hooks/useActions";
import { IPost } from "@/store/post/post.interface";
import { useState } from "react";

const NewsPage: React.FC = () => {
  const { fetchAllPosts } = useActions();
  const post = fetchAllPosts({});
  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} props={post} />
      ))}
    </>
  );
};

export default NewsPage;
