import React from "react";
import { useParams } from "react-router-dom";
import "../styles/PostDetail.css";

const PostDetail = () => {
  const { id } = useParams();

  return (
    <div className="post-detail">
      <h2>Post {id}</h2>
      <video
        src="https://samplelib.com/lib/preview/mp4/sample-5s.mp4"
        controls
        className="full-video"
      />
    </div>
  );
};

export default PostDetail;
