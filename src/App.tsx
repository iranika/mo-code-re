import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import AppBar from './AppBar'
import Viewer from './Viewer'
import ViewerContents from './Viewer';

interface ViewerContext {
  lang: string,
}
const defaultAppContext: ViewerContext = {
  lang: "ja",
}
export const AppContext = React.createContext({});
//TODO: context情報をlocalstorageに記憶させる
//const appKey = "MichikusaViewer"
//const appData = localStorage.getItem(appKey)
//const initialState = appData ? JSON.parse(appData) : defaultAppContext

export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <AppContext.Provider value={defaultAppContext}>
          <AppBar />
          <Viewer />
        </AppContext.Provider>
      </div>
    );
  }
}

/*
export default class App extends React.Component {
  render(){
    return (
      <div className="App">
        <AppContext.Provider value={this.lang}>
          <AppBar />
          <Viewer />
        </AppContext.Provider>
      </div>
    );
  }
}
*/