import { SONG_SELECTED } from "../types/types";

// Action Creator
export const selectSong = song => {
  //Return an action
  return {
    type: SONG_SELECTED,
    payload: song
  };
};
