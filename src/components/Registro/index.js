import React, { useRef, useState } from "react";

import {
  Card,
  Grid,
  Button,
  Typography,
  Link,
  TextField
} from "@mui/material";
import { registrarUsuario } from "../../services/usuarios";
import AlertDialog from "./AlertDialog";
import { useNavigate } from 'react-router-dom';
import ImagenFondo from "../../assets/images/registrofondo.jpeg";

const Registro = () => {
  const formRef = useRef();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const {email,username,nombre,bio,password} = Object.fromEntries(formData);

    const validaEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const validaUserName = /^([a-zA-Z0-9_-]){3,30}$/

    if(validaEmail.test(email) && (password.length>6 && password.length<200) && validaUserName.test(username)){
      const resRegistro = await registrarUsuario(email,username,nombre,bio,password);
      if(resRegistro.success){
        setOpenModal(true)
        setModalMessage("Usuario registrado correctamente")
        setTimeout(() => {
          navigate('/login') 
        }, 5000);
      }  
      else{
        setOpenModal(true)
        setModalMessage("Error al registrar el usuario")
      }
    }
    else{
      setOpenModal(true)
      setModalMessage("Información del usuario no cumple los requisitos. El nombre del usuario debe ser alafanúmerico y tener entre 3 y 30 carácteres. La contraseña debe tener entre 6 y 200 carácteres. Asegúrate de que el email sea válido.")
    }


  }

  return(
    <>
      <Grid container>
        <Grid item lg={6} md={0} xs={0}>
          <img src={ImagenFondo} width="65%"/>
        </Grid>
        <Grid item lg={6} md={12} xs={12}>
          <Card
            sx={{
              padding:"40px", margin:"25%",
            }}
          >
            <form onSubmit={handleSubmit} ref={formRef}>
              <Grid direction="column" container justifyContent="center" alignItems="center">
                <Typography
                  sx={{
                    fontWeight: "bold",
                    marginTop: "5px",
                    marginBottom: "5px" ,
                    fontSize:"18px"
                  }}
                >
                  Desafiogram
                </Typography>

                <Typography
                  fontSize="12px"
                  sx={{
                    fontWeight: "bold",
                    color: "#d7d7d7"
                  }}
                >
                  Registrate para ver el clon de Instagram
                </Typography>

                <TextField
                  sx={{
                    marginTop: "5px",
                    marginBottom: "5px" ,
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
                    marginTop: "5px",
                    marginBottom: "5px" ,
                  }}
                  placeholder="Nombre"
                  type="text"
                  fullWidth
                  required
                  size="small"
                  id="nombre"
                  name="nombre"
                />
                <TextField
                  sx={{
                    marginTop: "5px",
                    marginBottom: "5px" ,
                  }}
                  placeholder="Nombre usuario"
                  type="text"
                  fullWidth
                  required
                  size="small"
                  id="username"
                  name="username"
                />
                <TextField
                  sx={{
                    marginTop: "5px",
                    marginBottom: "5px" ,
                  }}
                  placeholder="Bio"
                  type="text"
                  fullWidth
                  required
                  size="small"
                  id="bio"
                  name="bio"
                />
                <TextField
                  sx={{
                    marginTop: "5px",
                    marginBottom: "5px" ,
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
                    marginTop: "5px",
                    marginBottom: "5px" ,
                  }}
                  type="submit"
                  color="primary"
                  variant="contained"
                >
                  Sign up
                </Button>
                <Typography>
                  <Link href="/login">
                    Ya tienes cuenta? Login
                  </Link>
                </Typography>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>

      <AlertDialog
        open={openModal}
        onClick={setOpenModal}
        message={modalMessage}
      />
    </>
  )
}

export default Registro;