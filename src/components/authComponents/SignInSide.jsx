import { Avatar, Button, CssBaseline, TextField, Paper, Box, Grid, Typography, createTheme, ThemeProvider } from "@mui/material";
import { useContext, useState } from "react";
import UserContext from "../../context/user/UserContext";
import { useNavigate } from "react-router-dom"


const theme = createTheme();

export default function SignInSide() {

  const navigate = useNavigate();

  const [signUp, setSignUp] = useState(false)


  const { loginUser, registerUser } = useContext(UserContext)

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    adress: "",
    comune: "",
    region: "",
    password: "",
  }

  console.log(`Este es el estado de signUp: ${signUp}`)

  const [user, setUser] = useState(initialValues)

  const handleChange = (e) => {
    setUser((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  console.log(user)

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (signUp) {
        await registerUser(user);
      } else {
        await loginUser(user);
      }
      setUser(initialValues);
      navigate("/");
    } catch (error) {
      console.error("Error durante el registro de usuario", error);
      // Manejando el error
    }
  };
  

  const changeMode = () => {
    setSignUp(!signUp)
    setUser(initialValues)
  }



  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random/?books)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

            </Avatar>
            <Typography component="h1" variant="h5">
              {signUp ? "Regístrate" : "Inicia sesión"}
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              {signUp && (
                <TextField
                  margin="normal"
                  required
                  id="name"
                  fullWidth
                  autoFocus
                  onChange={handleChange}
                  type="text"
                  placeholder="Nombre"
                  name="name"
                  label="Nombre"
                  value={user.name}
                />
              )}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={handleChange}
                value={user.email}
              />

              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={handleChange}
                value={user.password}
              />
              {signUp && (
                <>
                  <TextField
                    margin="normal"
                    required
                    id="phone"
                    fullWidth
                    autoFocus
                    onChange={handleChange}
                    type="text"
                    placeholder="912345678"
                    name="phone"
                    label="Teléfono"
                    value={user.phone}
                  />
                  <TextField
                    margin="normal"
                    required
                    id="adress"
                    fullWidth
                    autoFocus
                    onChange={handleChange}
                    type="text"
                    placeholder="pje uno 33, depto 30A"
                    name="adress"
                    label="Dirección"
                    value={user.adress}

                  />
                  <TextField
                    margin="normal"
                    required
                    id="comune"
                    fullWidth
                    autoFocus
                    onChange={handleChange}
                    type="text"
                    placeholder="Providencia"
                    name="comune"
                    label="Comuna"
                    value={user.comune}

                  />
                  <TextField
                    margin="normal"
                    required
                    id="region"
                    fullWidth
                    autoFocus
                    onChange={handleChange}
                    type="text"
                    placeholder="Región metropolitana de Santiago"
                    name="region"
                    label="Región"
                    value={user.region}

                  />
                </>
              )}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {signUp ? "Regístrate" : "Inicia sesión"}
              </Button>
              <Grid container>
                <Grid item>
                  <Button onClick={changeMode}>
                    {signUp ? "Ya tienes una cuenta? Inicia sesión" : "No tienes una cuenta con nosotros? Regístrate"}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}