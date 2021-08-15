import {
  FETCH_TRACKS_PENDING,
  FETCH_TRACKS_SUCCESS,
  FETCH_TRACKS_ERROR,
  SET_TRACK,
} from "../../constants/actiontypes";

const initialState = {
  loading: false,
  tracks: [],
  selectedTrack: {},
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRACKS_PENDING:
      return { ...state, loading: true };
    case FETCH_TRACKS_SUCCESS:
      return { ...state, tracks: action.payload, loading: false };
    case FETCH_TRACKS_ERROR:
      return { ...state, loading: false };
    case SET_TRACK:
      return {
        ...state,
        selectedTrack: state.tracks.filter(
          (track) => track.trackId === action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
