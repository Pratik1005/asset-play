import "./SingleVideo.css";
import axios from "axios";
import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {NavMenu} from "../../components";

const SingleVideo = () => {
  const [singleVideo, setSingleVideo] = useState({});
  const params = useParams();
  console.log(params);
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`/api/video/${params.videoId}`);
        console.log("single video response", response);
        setSingleVideo(response.data.video);
      } catch (err) {
        console.error("single video", err);
      }
    })();
  }, [params.videoId]);
  return (
    <section className="app-ctn">
      <NavMenu />
      <div className="single-video-ctn pd-lg">
        <iframe
          width="100%"
          height="720"
          src={`https://www.youtube.com/embed/${params.videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <h3>{singleVideo.title}</h3>
        <p>
          <span>{singleVideo.views} views</span>
          <span>•</span>
          <span>{singleVideo.date}</span>
        </p>
        <p>{singleVideo.description}</p>
      </div>
    </section>
  );
};

export {SingleVideo};
