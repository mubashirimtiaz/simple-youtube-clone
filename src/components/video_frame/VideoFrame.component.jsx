import React from "react";
import moment from "moment";
import "./VideoFrame.css";

const VideoFrame = ({ selectedVideo }) => {
  const {
    id: { videoId },
    snippet,
  } = selectedVideo;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <>
      <iframe
        className="videoPlayer"
        src={videoUrl}
        title={videoUrl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <h3 className="my-2">{snippet.title}</h3>
      <p className="lead">
        <span className="font-weight-bold">{snippet.channelTitle}</span> |
        <span> {moment(snippet.publishedAt).startOf("day").fromNow()}</span>
      </p>
    </>
  );
};

export default VideoFrame;
