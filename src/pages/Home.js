import React, { useState, useEffect } from "react";
import Stories from "../components/Stories";
import PostCard from "../components/PostCard";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=50") // Fetch posts from DummyJSON API
      .then((response) => response.json())
      .then((data) =>
        setPosts(
          data.posts.map((post) => ({
            id: post.id,
            username: `User ${post.id}`,
            userImg: `https://i.pravatar.cc/50?img=${post.id}`, // Random user images
            postImg: `https://picsum.photos/350/400?random=${post.id}`, // Random post images
            caption: post.body, // English caption from API
          }))
        )
      )
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div>
      <Stories />
      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Home;
