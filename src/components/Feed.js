import React from "react";
import "../styles/Feed.css";

const posts = [
  {
    id: 1,
    username: "john_doe",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    image: "https://source.unsplash.com/random/400x400?sig=1",
    caption: "Enjoying the sunset! 🌅",
    likes: 120,
    comments: 34,
  },
  {
    id: 2,
    username: "jane_smith",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    image: "https://source.unsplash.com/random/400x400?sig=2",
    caption: "Best day ever! ☀️🏖️",
    likes: 200,
    comments: 45,
  },
];

const Feed = () => {
  return (
    <div className="feed-container">
      {posts.map((post) => (
        <div key={post.id} className="post-card">
          <div className="post-header">
            <img src={post.avatar} alt="avatar" className="avatar" />
            <span className="username">{post.username}</span>
          </div>
          <img src={post.image} alt="post" className="post-image" />
          <div className="post-footer">
            <p className="caption"><strong>{post.username}</strong> {post.caption}</p>
            <div className="actions">
              <span>❤️ {post.likes}</span>
              <span>💬 {post.comments}</span>
              <span>🔄 Share</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
