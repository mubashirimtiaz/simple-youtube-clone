import React from "react";
import { VideoItem } from "..";

const VideosList = ({ videos, setSelectedVideo }) => {
  return (
    <ul className="list-unstyled">
      {videos.map((video) => (
        <VideoItem
          key={video.id.videoId}
          video={video}
          setSelectedVideo={setSelectedVideo}
        />
      ))}
    </ul>
  );
};

export default VideosList;
