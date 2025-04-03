import React from "react";
import Feed from "../components/Feed"; // Import Feed component

const FeedPage = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Trending Feed</h2>
      <Feed />
    </div>
  );
};

export default FeedPage;
