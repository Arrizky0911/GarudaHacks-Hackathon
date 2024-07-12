import React, { useState } from "react";
import { Box, Button, Typography, IconButton, TextField } from "@mui/material";
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

const UploadBox = styled(Box)(({ theme, uploaded }) => ({
  border: "2px dashed #fff",
  borderRadius: "8px",
  width: "950px",
  height: uploaded ? "300px" : "444px",
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
  "Kontribusi Essay":
    "Kontribusi Essay adalah esai yang menjelaskan kontribusi Anda terhadap pembangunan nasional dan bagaimana beasiswa ini akan membantu mencapai tujuan tersebut.",
  "Study Plan Essay":
    "Study Plan Essay adalah esai yang merencanakan program studi Anda di masa depan, baik di dalam maupun luar negeri, serta bagaimana ini berkaitan dengan pembangunan pendidikan nasional.",
  "Personal Statement":
    "Personal Statement adalah pernyataan pribadi yang menjelaskan latar belakang, pencapaian, dan tujuan karir Anda yang relevan dengan pendidikan dan pengembangan sumber daya manusia di Indonesia.",
};

const FilePicker = () => {
  const [activeButton, setActiveButton] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [description, setDescription] = useState("");
  const [fileContent, setFileContent] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
      setUploadedFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setFileContent(e.target.result);
      };
      reader.readAsText(file);
    } else {
      alert("Please select a valid Word document file (.doc or .docx)");
    }
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
          active={activeButton === "Kontribusi Essay"}
          onClick={() => handleButtonClick("Kontribusi Essay")}
        >
          Kontribusi Essay
        </CustomButton>
        <CustomButton
          variant="outlined"
          active={activeButton === "Study Plan Essay"}
          onClick={() => handleButtonClick("Study Plan Essay")}
        >
          Study Plan Essay
        </CustomButton>
        <CustomButton
          variant="outlined"
          active={activeButton === "Personal Statement"}
          onClick={() => handleButtonClick("Personal Statement")}
        >
          Personal Statement
        </CustomButton>
      </Box>

      <UploadBox uploaded={!!uploadedFile}>
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
              accept=".doc,.docx"
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
              Select a Word document file (.doc/.docx) or drag and drop here
            </Typography>
            <Typography variant="body2">
              File size should not exceed 1500 words.
            </Typography>
            <SelectFileButton variant="contained" component="span">
              Select File
            </SelectFileButton>
          </>
        )}
      </UploadBox>

      {uploadedFile && (
        <TextField
          multiline
          rows={10}
          variant="outlined"
          fullWidth
          value={fileContent}
          InputProps={{
            readOnly: true,
          }}
          sx={{
            marginTop: "16px",
            width: "950px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            color: "#000",
            border: "1px solid #000",
            borderRadius: '10px'
          }}
        />
      )}

      <Description variant="body2">
        {description
          ? description
          : "Description here. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, delectus vitae nesciunt maiore provident inventore molestiae at rem sunt architecto."}
        {activeButton === "Kontribusi Essay" && (
          <a href="#" style={{ color: "#4d90fe" }}>
            Learn more about Kontribusi Essay
          </a>
        )}
        {activeButton === "Study Plan Essay" && (
          <a href="#" style={{ color: "#4d90fe" }}>
            Learn more about Study Plan Essay
          </a>
        )}
        {activeButton === "Personal Statement" && (
          <a href="#" style={{ color: "#4d90fe" }}>
            Learn more about Personal Statement
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
