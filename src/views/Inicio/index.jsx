import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { exploreUsuarios } from "../../services/usuarios";
import MediaCard from "../../components/MediaCard";
import { Grid } from '@mui/material';
import randomColor from "randomcolor";

const Inicio = () => {
  const [usuarios, setUsuarios] = useState([])
  const getToken = () => {
    const session = JSON.parse(sessionStorage.getItem('session'))
    return session.token || "";
  }

  const getUsuarios = async () => {
    const token = getToken()
    const res = await exploreUsuarios(token)
    if(res.success) setUsuarios( res.data.map(user => {return {...user, color: randomColor()}}))
  }

  useEffect(()=>{
    getUsuarios()
  },[])

  return (
    <Layout>
      <Grid container spacing={2}>
        {
          usuarios.map(({username,color}, index)=>{
             return(
              <Grid key={index} item lg={3} md={4} xs={6}>
                <MediaCard userName={username} color={color}/>
              </Grid>
             )
          })
        }
      </Grid>
      
    </Layout>
  )
}

export default Inicio;