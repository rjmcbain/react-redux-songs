import React, { Component } from "react";
// import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./reducers";
import SongList from "./components/SongList";
import SongDetail from "./components/SongDetail";

// import { selectSong } from '../actions'

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <div className="ui container grid">
          <div className="ui row">
            <div className="column eight wide">
              <SongList />
            </div>
            <div className="column eight wide">
              <SongDetail />
            </div>
          </div>
        </div>
      </Provider>
    );
  }
}
