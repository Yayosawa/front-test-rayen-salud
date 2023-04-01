import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { exploreUsuarios } from "../../services/usuarios";
import MediaCard from "../../components/MediaCard";
import { Grid, Typography } from '@mui/material';
import randomColor from "randomcolor";
import { explorePosts } from "../../services/posts";

const Inicio = () => {
  const [usuarios, setUsuarios] = useState([])
  const [posts, setPosts] = useState([])

  const getToken = () => {
    const session = JSON.parse(sessionStorage.getItem('session'))
    return session.token || "";
  }

  const getUsuarios = async () => {
    const token = getToken()
    const res = await exploreUsuarios(token)
    if(res.success) setUsuarios( res.data.map(user => {return {...user, color: randomColor()}}))
  }

  const getPosts = async () => {
    const token = getToken()
    const res = await explorePosts(token)
    if(res.success) setPosts(res.data)
  }

  useEffect(()=>{
    getUsuarios()
    getPosts()
  },[])

  return (
    <Layout>

      <Typography variant="h6" color="#8E8E8E">
        Descubrir usuarios
      </Typography>
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

      <br/>
      <br/>

      <Typography variant="h6" color="#8E8E8E">
        Explorar
      </Typography>
      <Grid container spacing={4}>
        {
          posts.map(({url,caption}, index)=>{
             return(
              <Grid key={index} item lg={4} md={6} xs={12}>
                <img src={`${process.env.REACT_APP_API_URL}${url}`} width="100%" alt={caption}/>
              </Grid>
             )
          })
        }
      </Grid>
      
    </Layout>
  )
}

export default Inicio;