import React,{Component} from 'react';
//import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import koma4 from './data/koma4.json';

export default class ViewerContents extends Component {
  state = {
    showlist: [0],
    current: 1
  }
  handleAddShowList = () =>{
    this.setState({
      showlist: this.state.showlist.concat(this.state.current),
      current: this.state.current + 1
    })
    console.log(this.state.current)
    console.log(this.state.showlist)
  }
  render() {
    return (
      <div>
        {this.state.showlist.map((index) => {
          return koma4[index].ImagesUrl.map(url =>{
            return <img src={url} alt={koma4[index].Title}></img>
          })
        })}
        <input type="button" onClick={this.handleAddShowList} value="続きを表示"/>
      </div>
    );
  }
}