import React, { useState } from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import "../styles/PostCard.css";

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="post-card">
      {/* User Info */}
      <div className="post-header">
        <img src={post.userImg} alt={post.username} className="profile-pic" />
        <p>{post.username}</p>
      </div>

      {/* Post Image */}
      <img src={post.postImg} alt="Post" className="post-img" />

      {/* Post Actions */}
      <div className="post-actions">
        <FaHeart className="icon" onClick={() => setLikes(likes + 1)} />
        <FaComment className="icon" />
        <FaShare className="icon" />
      </div>
      
      {/* Like Count & Caption */}
      <p className="likes">{likes} Likes</p>
      <p className="caption"><strong>{post.username}</strong> {post.caption}</p>
    </div>
  );
};

export default PostCard;
