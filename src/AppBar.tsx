import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import koma4 from './data/koma4.json';
import {AppContext} from './App'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appbar:{
      background : '#00cc00',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      textAlign: "left",
      flexGrow: 1,
    },
  }),
);

//TODO: optionsは親要素で管理する
const options = [
  'Japanese',
  'English',
  'Chinese',
];
const MangaList = koma4.map((item, index) =>
  //TODO: アイテムがクリックされたときの実装して
  <ListItem>{index+1}.{item.Title}</ListItem>
);

//TODO: 肥大化しやすいのでどこかのタイミングで分割、リファクタリングする。
export default function ButtonAppBar() {
  const title = "みちくさびゅあー"
  const classes = useStyles();
  const [langMenuAncor, setLangMenuAncor] = React.useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const lang = React.useContext(AppContext)
  //console.log(lang)

  //言語メニューの処理
  const handleClose = () => {
    //TODO: 引数で選択できるようにする(優先度低)
    setLangMenuAncor(null);
  };
  const handleClickAncor = (event: React.MouseEvent<HTMLElement>, setAncor: React.Dispatch<React.SetStateAction<HTMLElement | null>>) => {
      setAncor(event.currentTarget);
  };
  const handleLangMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setSelectedIndex(index);
    setLangMenuAncor(null);
  };

  //タイトルリストバーの処理
  const [titleSidebarAncor, settitleSidebarAncor] = React.useState({
    right: false,
  });
  type DrawerSide = 'top' | 'left' | 'bottom' | 'right';
  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event &&
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    settitleSidebarAncor({ ...titleSidebarAncor, [side]: open });
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <List component="nav" aria-label="Device settings">
            <ListItem
              button
              aria-haspopup="true"
              aria-controls="lock-menu"
              aria-label="LANG"
              onClick={ (e)=>{ handleClickAncor(e,setLangMenuAncor) }}
            >
              <ListItemText primary={options[selectedIndex]} />
            </ListItem>
          </List>
          <Menu
            id="lock-menu"
            anchorEl={langMenuAncor}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(langMenuAncor)}
            onClose={handleClose}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                disabled={index === selectedIndex}
                selected={index === selectedIndex}
                onClick={event => handleLangMenuItemClick(event, index)}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
          
          <IconButton　edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer('right', true)}
          >
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            anchor="right"
            open={titleSidebarAncor.right}
            onClose={toggleDrawer('right', false)}
            onOpen={toggleDrawer('right', true)}
          >
            <List>
              {MangaList}
            </List>
            </SwipeableDrawer>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}