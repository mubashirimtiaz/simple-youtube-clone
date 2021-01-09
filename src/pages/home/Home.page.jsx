import React, { useState } from "react";
import youtube from "../../api/youtube";
import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { SearchForm, VideoFrame, VideosList } from "../../components";

//fetching data from youtube api
const fetchVideos = async ({ queryKey }) => {
  const {
    data: { items },
  } = await youtube.get("search", { params: { q: queryKey[1] } });
  return items;
};
//homepage
const Home = () => {
  const [videoQuery, setVideoQuery] = useState(
    localStorage.getItem("videoQuery") ? localStorage.getItem("videoQuery") : ""
  );
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { data, status } = useQuery(
    ["youtubeVideos", videoQuery],
    fetchVideos,
    {
      staleTime: Infinity,
      onSuccess: (data) => {
        localStorage.setItem("videoQuery", videoQuery);
        setSelectedVideo(data[0]);
      },
    }
  );

  return (
    <>
      <SearchForm setVideoQuery={setVideoQuery} videoQuery={videoQuery} />
      <div className="container-fluid">
        {status === "loading" && <h1>loading...</h1>}
        {status === "error" && <h1>You have exceed the request limits</h1>}
        {status === "success" && (
          <div className="row my-4">
            <div className="col-md-7">
              <VideoFrame selectedVideo={selectedVideo} />
            </div>
            <div className="col-md-5">
              <VideosList videos={data} setSelectedVideo={setSelectedVideo} />
            </div>
          </div>
        )}
        <ReactQueryDevtools initialIsOpen={true} />
      </div>
    </>
  );
};

export default Home;
