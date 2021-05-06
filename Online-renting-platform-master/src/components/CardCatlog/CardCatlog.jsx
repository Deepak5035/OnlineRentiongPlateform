import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

export default function CardCatlog(props) {
  const classes = useStyles();
  const {catalogue} = props;
//title={catalogue.name} description = {catalogue.description} url={catalogue.url}
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={catalogue.url}
          title={catalogue.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {catalogue.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {catalogue.description}
        </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={()=>props.handleClick(catalogue)}>
          <b>Add to Cart</b>
        </Button>

        
        
      </CardActions>
    </Card>
  );
}
