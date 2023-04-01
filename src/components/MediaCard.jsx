import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function MediaCard({userName, color}) {
  console.log("COLO)R=>", color)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Grid container           
          direction="column"
          alignItems="center"
          justifyContent="center"
        >

        <div style={{
            background: color,
            borderRadius: "50%",
            width: "50px",
            height: "50px"
        }}/>
        <Typography gutterBottom variant="h6" component="div">
          {userName}
        </Typography>
        <Button variant="contained" size="small">Ver perfil</Button>

        </Grid>

      </CardContent>


    </Card>
  );
}