import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { API_KEY, imageURL } from "../../constant";
import "./RowPost.css";
import YouTube, { YouTubeProps } from "react-youtube";

function RowPost(props) {
  const [video, setVideo] = useState("");
  const [Posters, setPosters] = useState("");

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const [state, setState] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data.results);
      setState(response.data.results);
    });
  }, []);

  // const handleClick = (id) => {
  //     console.log(id);
  //     axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
  //         if (response.data.results.length[0] !== 0) {
  //             setVideo(response.data.results[0])
  //             console.log(response.data.results[0])
  //         }
  //     })

  // }

  const handleClick = (id) => {
    axios
      .get(
        `/movie/${id}/images?api_key=fa3f14157f9ffda08da13922ef5bf0d4&language=en-US&include_image_language=ml`
      )
      .then((response) => {
        // console.log(response.data.posters[0]);

        // setPosters(response.data.posters[i])
        for (var i = 0; i < 2; i++) {
          setPosters(response.data.posters);
          // console.log(response.data.posters.length);
          console.log("Images :", response.data.posters[i]);
        }
      });
  };

  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="posters">
        {state.map((obj, index) => (
          <img id="new"
            onClick={() => handleClick(obj.id)}
            className={props.isSmall ? "smallPoster" : "poster"}
            src={`${imageURL + obj.backdrop_path}`}
            key={index}
          ></img>
        ))}
      </div>
     <div className="middle"><h1>HELLLO MY DEAR WRING NUMBER</h1></div>
      {/* {video && <YouTube videoId={video.key} opts={opts} />} */}
      {Posters &&
        Posters.map((obj, index) => (
          <img
            className="relatedPosters"
            key={index}
            src={imageURL + obj.file_path}
          ></img>
        ))}
    </div>
  );
}

export default RowPost;
