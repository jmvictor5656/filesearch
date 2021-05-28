import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import api from '../api'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '1 0 auto',
  },
  media: {
    height: 140,
  },
});

export default function CustomCard(props) {
  const classes = useStyles();

  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    // link.click();
    window.open(link, "_blank");
    document.body.removeChild(link);
    // delete link;
    
  }

  function download(){
    let download_url = api.get(`/download/${props.filename}`)
    download_url.then((response) => downloadURI(response.data, props.filename))
  }



  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.filename}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.content.substring(0,500) + '...'}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={download} >
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
