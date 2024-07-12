import React, { useRef } from "react";
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
import { Link } from "react-router-dom";

function Register() {
  const registerForm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = registerForm.current.fullname.value;
    const email = registerForm.current.email.value;
    const password1 = registerForm.current.password.value;
    const password2 = registerForm.current['confirm-password'].value;

    if (password1 !== password2) {
      alert("Passwords did not match!");
      return;
    }

    const userInfo = { name, email, password1, password2 };

    // Function to handle user registration (e.g., send userInfo to backend)
    // registerUser(userInfo)
  };

  return (
    <div style={{ backgroundColor: "#252525", height: "100vh", margin: 0 }}>
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
            height: "auto",
            borderRadius: "16px",
            boxShadow: "0px -1px 5px rgba(255, 255, 255, 0.5)",
            padding: "80px 76px 70px 76px",
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
              marginTop: "20px",
            }}
          >
            Create Your Account
          </Typography>
          <Typography
            variant="body1"
            align="center"
            paddingX={"92px"}
            paddingTop={"20px"}
            sx={{
              fontSize: 20,
              fontWeight: "regular",
              color: "rgba(255, 255, 255, 0.7)",
            }}
          >
            Join us today! Enter your details to sign up.
          </Typography>
          <form ref={registerForm} onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sx={{ marginX: "70px", marginTop: "20px" }}>
                <TextField
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  variant="outlined"
                  size="small"
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
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.2)", // Warna border putih opacity 20%
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#FFFFFF", // Warna border putih saat hover
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ marginX: "70px", marginTop: "10px" }}>
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
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.2)", // Warna border putih opacity 20%
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#FFFFFF", // Warna border putih saat hover
                      },
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
                      color: "#FFFFFF", // Warna label putih
                    },
                    "& .MuiInputBase-input": {
                      color: "#FFFFFF", // Warna teks input putih
                      padding: "22px", // Padding untuk input field
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "#FFFFFF", // Warna placeholder putih
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px", // Rounded border radius 8px
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.2)", // Warna border putih opacity 20%
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#FFFFFF", // Warna border putih saat hover
                      },
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sx={{ marginX: "70px", marginTop: "10px" }}>
                <TextField
                  fullWidth
                  id="confirm-password"
                  label="Confirm Password"
                  variant="outlined"
                  size="small"
                  type="password"
                  sx={{
                    "& .MuiInputLabel-root": {
                      color: "#FFFFFF", // Warna label putih
                    },
                    "& .MuiInputBase-input": {
                      color: "#FFFFFF", // Warna teks input putih
                      padding: "22px", // Padding untuk input field
                    },
                    "& .MuiInputBase-input::placeholder": {
                      color: "#FFFFFF", // Warna placeholder putih
                    },
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "8px", // Rounded border radius 8px
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "rgba(255, 255, 255, 0.2)", // Warna border putih opacity 20%
                      },
                      "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#FFFFFF", // Warna border putih saat hover
                      },
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
                  variant="contained"
                  color="primary"
                  type="submit"
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
                  Sign Up
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

export default Register;
