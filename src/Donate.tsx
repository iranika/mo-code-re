import React from 'react';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { green, pink } from '@material-ui/core/colors';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import Cards from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 1,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }),
);

export default function Donate() {
  const classes = useStyles();
  const [ancor, setAncor] = React.useState(false);
  
  const handleSetAncor = ()=>{
    setAncor(!ancor)
  }
  return (
    <div id="Donate" className={classes.root}>
      <Cards>
        <Button
          onClick={handleSetAncor}
        >
          支援について
        </Button>
        <Collapse in={ancor}>
          <Cards>
            ご支援をお待ちしています。
          </Cards>
        </Collapse>
      </Cards>
  
    </div>
  )
}