import {
  FETCH_TRACKS_PENDING,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_ERROR,
  SET_TRACK,
} from "../../constants/actiontypes";

export const fetchTracks = () => {
  return (dispatch) => {
    dispatch(fetchTracksPending());
    fetch("https://itunes.apple.com/search?term=rock&media=musicVideo", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchTracksSuccess(res.results));
        return res.results;
      })
      .catch((error) => {
        dispatch(fetchTracksError(error));
      });
  };
};

export const setTrack = (id) => {
  return { type: SET_TRACK, payload: id };
};

const fetchTracksPending = () => {
  return {
    type: FETCH_TRACKS_PENDING,
  };
};

const fetchTracksSuccess = (TRACKS) => {
  return {
    type: FETCH_TRACKS_SUCCESS,
    payload: TRACKS,
  };
};

const fetchTracksError = (error) => {
  return {
    type: FETCH_TRACKS_ERROR,
    error: error,
  };
};
