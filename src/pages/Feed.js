import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Feed.css";

const Feed = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/posts?limit=50") // Fetch posts from DummyJSON
      .then((response) => response.json())
      .then((data) =>
        setPosts(
          data.posts.map((post) => ({
            id: post.id,
            username: `User ${post.id}`,
            thumbnail: `https://picsum.photos/400/400?random=${post.id}`, // Random images
            video:
              post.id % 2 === 0
                ? `https://samplelib.com/lib/preview/mp4/sample-5s.mp4`
                : null, // Assign videos randomly
            caption: post.body,
          }))
        )
      )
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <div className="feed-grid">
      {posts.map((post) => (
        <div
          key={post.id}
          className="feed-item"
          onClick={() => navigate(`/post/${post.id}`)}
        >
          {post.video ? (
            <video
              src={post.video}
              className="feed-thumbnail"
              poster={post.thumbnail}
              muted
            />
          ) : (
            <img src={post.thumbnail} alt="Thumbnail" className="feed-thumbnail" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Feed;
