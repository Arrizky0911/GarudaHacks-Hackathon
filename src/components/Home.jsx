import React from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/system";

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: "#101010",
  color: "#fff",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  "& .MuiButton-root": {
    margin: theme.spacing(2),
  },
}));

const UploadBox = styled(Box)(({ theme }) => ({
  border: "2px dashed #fff",
  borderRadius: "8px",
  width: "830px",
  height: "444px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  marginTop: theme.spacing(4),
}));

const Description = styled(Typography)({
  color: "#bbb",
  position: "absolute",
  bottom: "50px",
  textAlign: "center",
  width: "80%",
});

const Home = () => {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log(file);
  };

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" width="80%">
        <Button variant="contained" color="primary">
          LPDP
        </Button>
        <Button variant="contained" color="primary">
          Beasiswa Indonesia Maju
        </Button>
        <Button variant="contained" color="primary">
          Beasiswa Indonesia Maju
        </Button>
      </Box>

      <UploadBox>
        <input
          accept="application/pdf,application/msword"
          style={{ display: "none" }}
          id="file-upload"
          type="file"
          onChange={handleFileChange}
        />
        <label htmlFor="file-upload">
          <IconButton color="primary" aria-label="upload file" component="span">
            <CloudUploadIcon style={{ fontSize: "4rem", color: "#fff" }} />
          </IconButton>
        </label>
        <Typography variant="h6">
          Select a file or drag and drop here
        </Typography>
        <Typography variant="body2">
          PDF or Docs file size no more than 1500 words.
        </Typography>
        <Button variant="contained" component="span">
          Select File
        </Button>
      </UploadBox>

      <Description variant="body2">
        Description here. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Id, delectus vitae nesciunt maiore provident inventore molestiae
        at rem sunt architecto.{" "}
        <a href="#" style={{ color: "#4d90fe" }}>
          Learn more about LPDP
        </a>
      </Description>
      <Button
        variant="contained"
        color="primary"
        style={{ position: "absolute", bottom: "10px" }}
      >
        Submit
      </Button>
    </Container>
  );
};

export default Home;
