import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Smells like teen spirit", band: "Nirvana", duration: "4:00" },
    { title: "Where is my mind", band: "The Pixies", duration: "3:00" },
    { title: "OK Computer", band: "Radiohead", duration: "2:00" },
    { title: "Is this it", band: "The Strokes", duration: "5:00" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
