import React from "react";
import "../styles/Stories.css"; // Ensure this file exists

const Stories = () => {
  const stories = Array.from({ length: 10 }, (_, index) => ({
    id: index + 1,
    username: `User ${index + 1}`,
    userImg: `https://i.pravatar.cc/100?img=${index + 1}`, // Working avatar images
  }));

  return (
    <div className="stories-container">
      {stories.map((story) => (
        <div key={story.id} className="story">
          <img src={story.userImg} alt={story.username} className="story-img" />
          <p className="story-username">{story.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
