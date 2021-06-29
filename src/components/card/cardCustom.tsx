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
    margin: 15
  },
  media: {
    height: 140
  },
});

const CardCustom : React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://blog.friasneto.com.br/wp-content/uploads/2020/07/piracicaba-casa-condominio-residencial-terras-de-artemis-artemis-23-11-2019_11-02-08-0.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2"> Faz um Bem! </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Ajude o projeto Faz um Bem! Conheça as instituições que precisam de doações e ajude!
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Compartilhe
        </Button>
        <Button size="small" color="primary">
          Saiba Mais
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardCustom;