import React, { useState } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
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
    margin: theme.spacing(1),
  },
}));

const UploadBox = styled(Box)(({ theme }) => ({
  border: "2px dashed #fff",
  borderRadius: "8px",
  width: "950px",
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
  marginTop: "65px",
  textAlign: "center",
  width: "950px",
});

const CustomButton = styled(Button)(({ theme, active }) => ({
  minWidth: "200px",
  padding: "12px 102.5px",
  borderColor: "#4E5350",
  backgroundColor: active ? "#fff" : "transparent",
  color: active ? "#000" : "#4E5350",
  "&:hover": {
    backgroundColor: active ? "#fff" : "transparent",
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  width: "324px",
  height: "46px",
  padding: "18px 140px",
  position: "relative",
  top: "114px",
  backgroundColor: "white",
  color: "black",
  "&:hover": {
    backgroundColor: "#DDDDDD",
  },
}));

const SelectFileButton = styled(Button)(({ theme }) => ({
  width: "125px",
  height: "35px",
  padding: "12px 16px",
  backgroundColor: "#fff",
  color: "#000",
  "&:hover": {
    backgroundColor: "#DDDDDD",
  },
}));

const descriptions = {
  LPDP: "LPDP (Lembaga Pengelola Dana Pendidikan) adalah program beasiswa dari Kementerian Keuangan RI yang mendukung studi magister (S2) dan doktoral (S3) di dalam dan luar negeri. Fokusnya pada bidang-bidang strategis untuk pembangunan nasional.",
  "Beasiswa Indonesia Maju":
    "Beasiswa Indonesia Maju adalah program dari Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI untuk siswa berprestasi yang ingin melanjutkan pendidikan di jenjang yang lebih tinggi, baik di dalam maupun luar negeri. Beasiswa ini mencakup biaya pendidikan dan biaya hidup.",
  "Beasiswa Unggulan":
    "Beasiswa Unggulan adalah program beasiswa dari Kementerian Pendidikan, Kebudayaan, Riset, dan Teknologi RI untuk mahasiswa berprestasi di tingkat S1, S2, dan S3. Program ini mendukung berbagai bidang studi dengan tujuan mencetak lulusan unggul dan berdaya saing tinggi.",
};

const FilePicker = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);
  };

  const handleButtonClick = (button) => {
    setActiveButton(button);
    setDescription(descriptions[button]);
  };

  return (
    <Container>
      <Box display="flex" justifyContent="space-between" width="950px">
        <CustomButton
          variant="outlined"
          active={activeButton === "LPDP"}
          onClick={() => handleButtonClick("LPDP")}
        >
          LPDP
        </CustomButton>
        <CustomButton
          variant="outlined"
          active={activeButton === "Beasiswa Indonesia Maju"}
          onClick={() => handleButtonClick("Beasiswa Indonesia Maju")}
        >
          Beasiswa Indonesia Maju
        </CustomButton>
        <CustomButton
          variant="outlined"
          active={activeButton === "Beasiswa Unggulan"}
          onClick={() => handleButtonClick("Beasiswa Unggulan")}
        >
          Beasiswa Unggulan
        </CustomButton>
      </Box>

      <UploadBox>
        {uploadedFile ? (
          <>
            <InsertDriveFileIcon style={{ fontSize: "4rem", color: "#fff" }} />
            <Typography variant="h6">{uploadedFile.name}</Typography>
            <Typography variant="body2">
              {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
            </Typography>
          </>
        ) : (
          <>
            <input
              accept="application/pdf,application/msword"
              style={{ display: "none" }}
              id="file-upload"
              type="file"
              onChange={handleFileChange}
            />
            <label htmlFor="file-upload">
              <IconButton
                color="primary"
                aria-label="upload file"
                component="span"
              >
                <CloudUploadIcon style={{ fontSize: "4rem", color: "#fff" }} />
              </IconButton>
            </label>
            <Typography variant="h6">
              Select a file or drag and drop here
            </Typography>
            <Typography variant="body2">
              PDF or Docs file size no more than 1500 words.
            </Typography>
            <SelectFileButton variant="contained" component="span">
              Select File
            </SelectFileButton>
          </>
        )}
      </UploadBox>

      <Description variant="body2">
        {description
          ? description
          : "Description here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, delectus vitae nesciunt maiore provident inventore molestiae at rem sunt architecto."}
        {activeButton === "LPDP" && (
          <a href="#" style={{ color: "#4d90fe" }}>
            Learn more about LPDP
          </a>
        )}
      </Description>

      <SubmitButton variant="contained" color="primary">
        Submit
      </SubmitButton>
    </Container>
  );
};

export default FilePicker;
