import React, { useEffect, useRef } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import GoogleIcon from "../assets/icons8-google-48.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { user, loginUser } = useAuth();

  const loginForm = useRef(null);

  useEffect(() => {
    if (user) navigate("/upload");
  }, [user, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const email = loginForm.current.email.value;
    const password = loginForm.current.password.value;

    const userInfo = { email, password };
    loginUser(userInfo);
  };

  return (
    <div style={{ backgroundColor: "#252525", minHeight: "100vh", margin: 0 }}>
      <Container
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            bgcolor: "#1B1B23",
            width: "701px",
            height: "844px",
            borderRadius: "16px",
            boxShadow: "0px -1px 5px rgba(255, 255, 255, 0.5)",
            padding: "50px 76px 70px 76px",
          }}
        >
          <Typography
            variant="h1"
            align="center"
            gutterBottom
            sx={{
              fontSize: "40px",
              fontWeight: "bold",
              color: "#ffffff",
              marginTop: "70px",
            }}
          >
            Welcome Back, Essaier!
          </Typography>
          <Typography
            variant="body1"
            align="center"
            paddingX={"92px"}
            paddingTop={"70px"}
            sx={{
              fontSize: 20,
              fontWeight: "regular",
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            We are excited to have you back. Log in now and access your account.
          </Typography>
          <form ref={loginForm} onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sx={{ marginX: "70px", marginTop: "78px" }}>
                <TextField
                  fullWidth
                  id="email"
                  label="Email"
                  variant="outlined"
                  size="small"
                  type="email"
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "#FFFFFF",
                    },
                    "& .MuiInputBase-input": {
                      color: "#FFFFFF",
                      padding: "22px",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "#FFFFFF",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ABABAB",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ABABAB",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ABABAB",
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ marginX: "70px", marginTop: "10px" }}>
                <TextField
                  fullWidth
                  id="password"
                  label="Password"
                  variant="outlined"
                  size="small"
                  type="password"
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "#FFFFFF",
                    },
                    "& .MuiInputBase-input": {
                      color: "#FFFFFF",
                      padding: "22px",
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "#FFFFFF",
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px",
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#4D4D4D",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ABABAB",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#ABABAB",
                    },
                  }}
                />
              </Grid>
              <Grid
                item
                xs={12}
                align="center"
                sx={{ marginTop: "24px", marginBottom: "56px" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: "18px",
                    color: "rgba(255, 255, 255, 0.7)",
                    marginY: "16px",
                    cursor: "pointer",
                    "&:hover": {
                      color: "#FFFFFF",
                    },
                  }}
                  onClick={() => alert("Redirect to forgot")}
                >
                  Forgot your password?
                </Typography>
              </Grid>
              <Grid item xs={12} sx={{ marginX: "70px" }}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    height: "56px",
                    backgroundColor: "#0058FF",
                    color: "#FFFFFF",
                    fontSize: "18px",
                    fontWeight: "bold",
                    paddingY: "21.5px",
                    paddingX: "237.5px",
                    "&:hover": {
                      backgroundColor: "#0049C6",
                    },
                  }}
                >
                  Log In
                </Button>
              </Grid>
              <Grid
                item
                xs={12}
                align="center"
                sx={{ marginX: "70px", marginY: "16px" }}
              >
                <Box display="flex" alignItems="center">
                  <Divider sx={{ flexGrow: 1, backgroundColor: "#FFFFFF" }} />
                  <Typography
                    sx={{
                      fontSize: "18px",
                      color: "rgba(255, 255, 255, 0.7)",
                      paddingX: "10px",
                    }}
                  >
                    or
                  </Typography>
                  <Divider sx={{ flexGrow: 1, backgroundColor: "#FFFFFF" }} />
                </Box>
              </Grid>
              <Grid item xs={12} sx={{ marginX: "70px" }}>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    color: "#000000",
                    borderColor: "#ABABAB",
                    paddingY: "21.5px",
                    paddingX: "237.5px",
                    "&:hover": {
                      borderColor: "#0058FF",
                      backgroundColor: "rgba(0,0,0, 0.04)",
                    },
                  }}
                >
                  <img
                    src={GoogleIcon}
                    alt="Google Icon"
                    width="24"
                    height="24"
                  />
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </div>
  );
}

export default Login;
