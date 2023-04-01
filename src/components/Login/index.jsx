import React, { useRef, useState } from "react";

import {
  Card,
  Grid,
  Button,
  Typography,
  Link,
  TextField
} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { loginUsuario } from "../../services/usuarios";

const Login = () => {
  const formRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const {email,password} = Object.fromEntries(formData);

    const validaEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if(validaEmail.test(email) && (password.length>6 && password.length<200)){
      const resLogin = await loginUsuario(email,password);

      if(resLogin.success){
        sessionStorage.setItem('session', JSON.stringify({isLogged:true,token:resLogin.data.token}))
        window.location.reload()
      }  
      else{

      }
    }
    else{
    }


  }

  return(
    <>
      <Card
        sx={{
          padding:"40px", margin:"10px",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <form onSubmit={handleSubmit} ref={formRef}>
          <Grid direction="column" container justifyContent="center" alignItems="center">
            <Typography
              sx={{
                fontWeight: "bold",
                marginTop: "15px",
                marginBottom: "15px" ,
                fontSize:"18px"
              }}
            >
              Desafiogram
            </Typography>

            <TextField
              sx={{
                marginTop: "15px",
                marginBottom: "15px" ,
              }}
              placeholder="Email"
              type="email"
              fullWidth
              required
              size="small"
              id="email"
              name="email"
            />
            <TextField
              sx={{
                marginTop: "15px",
                marginBottom: "15px" ,
              }}
              placeholder="Contraseña"
              type="password"
              fullWidth
              required
              size="small"
              id="password"
              name="password"
            />
            <Button
              sx={{
                marginTop: "15px",
                marginBottom: "15px" ,
              }}
              type="submit"
              color="primary"
              variant="contained"
            >
              Login
            </Button>
            <Typography>
              <Link href="/registro">
                No tienes una cuenta ? Signup
              </Link>
            </Typography>
          </Grid>
        </form>
      </Card>
    </>
  )
}

export default Login;