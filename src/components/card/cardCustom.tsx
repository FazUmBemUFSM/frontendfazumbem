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
import PopUpPost from '../popUpPost/popUpPost';
import { useState } from 'react';

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

  const [popUp, setPopUp] = useState(false)
  const [imgUrl, setImgUrl] = useState("https://static.dezeen.com/uploads/2018/05/square-house-suzuki-architecture-residential-japan-shops_dezeen_sq-1.jpg");
  const [title, setTitle] = useState("Faz um Bem!")
  const [body, setBody] = useState("Ajude o projeto Faz um Bem! Conheça as instituições que precisam de doações e ajude!")
  const [companyImgUrl, setCompanyImgUrl] = useState("https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v286batch2-aew-company-logo-22_3.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=311ef304bb090c4ba4f0ad95fad47fbf");
  const [companyName, setCompanyName] = useState("Instituição ABCD")

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CenterContainer style={{flexDirection: "column"}}>
            <CardMedia
              className={classes.media}
              image={imgUrl}
              title="Contemplative Reptile"
            />
            <CardContent>
              <CenterContainer>
                <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
              </CenterContainer>
              

              <Typography variant="body2" color="textSecondary" component="p">
                {body}
              </Typography>
            </CardContent>
          </CenterContainer>
          
        </CardActionArea>

        <CenterButton>
          <CardActions>
            <Button size="small" color="primary" onClick={()=>setPopUp(true)}>
              Ver mais
            </Button>

          </CardActions>
        </CenterButton>


      </Card>

      {popUp ? 
        <PopUpPost open={true} onClose={setPopUp} imgUrl={imgUrl} 
          title={title} body={body} companyImgUrl={companyImgUrl} companyName={companyName}/> 
      : null}
    </>
  );
}

export default CardCustom;