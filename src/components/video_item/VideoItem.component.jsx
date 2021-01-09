import React from "react";
import moment from "moment";

const VideoItem = ({ video, setSelectedVideo }) => {
  const { snippet } = video;
  return (
    <li
      className="media mb-2 d-block d-md-flex "
      onClick={() => setSelectedVideo(video)}
    >
      <div className="d-flex">
        <img
          src={snippet.thumbnails.medium.url}
          alt={snippet.description}
          className="img-fluid"
        />
      </div>
      <div className="media-body ml-2">
        <h5 className="font-weight-bold">{snippet.title}</h5>
        <p>{snippet.channelTitle}</p>
        <p className="small">
          {moment(snippet.publishedAt).startOf("day").fromNow()}
        </p>
      </div>
    </li>
  );
};

export default VideoItem;
