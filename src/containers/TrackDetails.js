import React from "react";
import { useSelector } from "react-redux";
import { convertMillstoMins, formatReleaseDate } from "../utils/helperUtils";
import "../App.css";

const TrackDetails = () => {
  const trackDetails = useSelector((state) => state.tracks.selectedTrack[0]);
  const {
    artworkUrl100,
    trackName,
    artistName,
    collectionPrice,
    trackTimeMillis,
    releaseDate,
    trackViewUrl,
  } = trackDetails;
  const duration = convertMillstoMins(trackTimeMillis);
  const formatDate = formatReleaseDate(releaseDate);
  return (
    <table>
      <tr>
        <th>Artwork URL</th>
        <td>
          <img src={artworkUrl100} alt="art work url" />
        </td>
      </tr>
      <tr>
        <th>Track name</th>
        <td>{trackName}</td>
      </tr>
      <tr>
        <th>Artist</th>
        <td>{artistName}</td>
      </tr>
      <tr>
        <th>Track price</th>
        <td>{collectionPrice ? collectionPrice : "Price not available"}</td>
      </tr>
      <tr>
        <th>Duration</th>
        <td>{duration}</td>
      </tr>
      <tr>
        <th>Release date</th>
        <td>{formatDate}</td>
      </tr>
      <tr>
        <th></th>
        <td>
          <a target="_blank" rel="noreferrer" href={trackViewUrl}>
            <button>more details</button>
          </a>
        </td>
      </tr>
    </table>
  );
};

export default TrackDetails;
