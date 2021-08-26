import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { CenterContainer, CenterTextIfMobile} from '../../styles/generalStyledComponents';
import { CenterButton } from './card-styles';

const useStyles = makeStyles({
  root: {
    maxWidth: 325,
    margin: 15,
    backgroundColor:"#F5F5F5",
    borderRadius: "15px"
  },
  media: {
    height: 280,
    width: 280,
    margin: "10px 10px 0px 10px",
    borderRadius: "20px"
  },
});

const CardCustom : React.FC = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CenterContainer style={{flexDirection: "column"}}>
          <CardMedia
            className={classes.media}
            image="https://static.dezeen.com/uploads/2018/05/square-house-suzuki-architecture-residential-japan-shops_dezeen_sq-1.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <CenterContainer>
              <Typography gutterBottom variant="h5" component="h2"> Faz um Bem! </Typography>
            </CenterContainer>
            

            <Typography variant="body2" color="textSecondary" component="p">
              Ajude o projeto Faz um Bem! Conheça as instituições que precisam de doações e ajude!
            </Typography>
          </CardContent>
        </CenterContainer>
        
      </CardActionArea>

      <CenterButton>
        <CardActions>
          <Button size="small" color="primary">
            Ver mais
          </Button>

        </CardActions>
      </CenterButton>


    </Card>
  );
}

export default CardCustom;