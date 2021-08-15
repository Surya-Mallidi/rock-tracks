import React from "react";

const Track = ({ track, handleClick }) => {
  const { trackName, artistName, collectionPrice, artworkUrl100, trackId } =
    track;
  return (
    <tr>
      <td>{trackName}</td>
      <td>{artistName}</td>
      <td>{collectionPrice ? collectionPrice : "Price not available"}</td>
      <td>
        <img src={artworkUrl100} alt="art work url" />
      </td>
      <td>
        <button onClick={() => handleClick(trackId)}> View Record</button>
      </td>
    </tr>
  );
};

export default Track;
