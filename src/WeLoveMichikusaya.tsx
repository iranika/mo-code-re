import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import LikedGuys from './data/Liked.json';
import { green, pink } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    weLoveText:{
      fontSize: "150%",
      color: "rgb(255, 59, 92)",
      fontWeight: "bold",
    },
    guysIcon: {
      borderRadius: 50,
    },
  }),
);

export default function WeLoveMichikusaya(){
  const classes = useStyles();
  return (
    <div id="WeLove">
      <span className={classes.weLoveText}>WE♡道草屋</span><br />
      <div>
        {LikedGuys.map(guys => {
          return <img className={classes.guysIcon} src={guys.icon} alt={guys.name} title={guys.name}/>
        })}
      </div>
    </div>
  );
}