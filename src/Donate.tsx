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

function DonateText() {
  return (
    <Cards>
      みちくさびゅあーはiranikaのポケットマネーで開発・維持をしています。<br />
      しかし、資金にも限りがあります。iranikaは企画・サプライズが好きなのですが、<br />
      新しいアイデアを思いついても資金不足で断念することが2019年だけで3回ほどありました。<br />
      そこでこの度、旦那様にはご支援をお願いすることにしました。<br />
      正直なところ、この実質的な収益化の結論を出すまでに結構な葛藤がありました。
      その葛藤については長すぎてブログにまとめました。リンク→<a href="http://iranika.hatenablog.com/">iranikaのブログ「うなじと絶対領域++」</a>
      ただの駄文なので読むのは時間の無駄ですが、iranikaがどう思っているのかが伝わればと思います。
      みちくさびゅあーは３種類の支援方法を準備しました。<br />
      
      １つ目はDLSiteアフィリエイトのリンクから作品を購入して頂くことです。<br />
      リンク先で道草屋以外の作品を購入してもiranikaに一部還元されます。<br />
      この方法はDLSite側の収益からiranikaに還元されるため、桃鳥様の収益や旦那様の支払額に影響はありません。<br />
      また、現金化せずにDLSiteポイントとして受ける取ると2倍になるので、<br />
      前からやりたかった音声作品プレゼント企画がやりやすくなります。<br />
      このように、みんなHappyな方法なので、ぜひともこちらからご購入頂けると助かります。<br />
      (新作も即時追加予定です)<br />
      こちらのリンクで、ここを直接開けますのでDLSiteのブックマーク代わりに使って頂けると助かります。<br />

      ２つ目はPaypal.meとKyashによる送金です。<br />

      ３つ目はci-enによる月額支援です。<br />

      
    </Cards>

  )
  
}

export default function Donate() {
  const classes = useStyles();
  const [ancor, setAncor] = React.useState(!false);
  
  const handleSetAncor = ()=>{
    setAncor(!ancor)
  }
  return (
    <div id="Donate" className={classes.root}>
      <Cards>
        <Button
          onClick={handleSetAncor}
        >
          旦那様へのお願い
        </Button>
        <Collapse in={ancor}>
          <DonateText />          
        </Collapse>
      </Cards>
    </div>
  )
}