import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux/index";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Track from "./Track";

const TrackList = () => {
  const trackList = useSelector((state) => state.tracks.tracks);
  const isLoading = useSelector((state) => state.tracks.loading);
  const dispatch = useDispatch();
  const { fetchTracks, setTrack } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const history = useHistory();
  useEffect(() => {
    fetchTracks();
  }, []);
  const handleClick = (id) => {
    setTrack(id);
    history.push("/trackDetails");
  };
  return (
    <>
      {isLoading ? (
        <h3>Loading : Fetching Tracks</h3>
      ) : (
        trackList && (
          <table>
            <tr>
              <th>Track Name</th>
              <th>Artist</th>
              <th>Price</th>
              <th>Artwork URL</th>
            </tr>
            {trackList.map((track) => (
              <Track
                key={track.trackId}
                track={track}
                handleClick={handleClick}
              />
            ))}
          </table>
        )
      )}
    </>
  );
};
export default TrackList;
