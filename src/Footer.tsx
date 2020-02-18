import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import WeLoveMichikusaya from './WeLoveMichikusaya'
import Donate from './Donate';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 10,
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


export default function Footer() {
  const title = "みちくさびゅあー"
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container fixed>
        <WeLoveMichikusaya></WeLoveMichikusaya>
        <Donate></Donate>
        みちくさびゅあーは道草屋の著作者である桃鳥様から許諾を得てiranikaが提供・公開しています。<br />
        みちくさびゅーあー ©2019 iranika(@happy_packet)
      </Container>
    </div>
  );
}