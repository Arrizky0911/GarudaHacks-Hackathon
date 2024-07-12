import React, { useState } from 'react';
import { Avatar, Box, Button, TextField, Typography, IconButton, Divider } from '@mui/material';
import { styled } from '@mui/system';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const ProfileCard = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  color: 'black',
  padding: '32px',
  paddingBottom: '65px',
  borderRadius: '12px',
  boxShadow: theme.shadows[5],
  marginRight: theme.spacing(4),
  width: '240px',
  height: '300px',
}));

const EditContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  paddingY: '30px',
  paddingX: '26px',
  borderRadius: '16px',
  boxShadow: theme.shadows[5],
  color: '#000',
  width: '902px',
  height: '450px',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  borderColor: '#000',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderRadius: '6px',
  backgroundColor: 'transparent',
  color: '#000',
  '&:hover': {
    backgroundColor: '#f0f0f0',
    borderColor: '#000'
  },
}));

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    username: 'johndoe',
    profilePicture: 'https://via.placeholder.com/150',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProfile({ ...profile, [name]: value });
  };

  const handlePictureChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfile({ ...profile, profilePicture: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleUpdate = () => {
    // Add your update logic here (e.g., API call)
    setIsEditing(false);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#101010">
      <Box display="flex" alignItems="center">
        <ProfileCard>
          <Avatar
            src={profile.profilePicture}
            alt="Profile Picture"
            sx={{ width: 120, height: 120, marginBottom: 2 }}
          />
          <Typography variant="h6">
            {profile.firstName} {profile.lastName}
          </Typography>
          <Typography variant="body1">{profile.username}</Typography>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="icon-button-file"
            type="file"
            onChange={handlePictureChange}
          />
          <label htmlFor="icon-button-file">
            <IconButton
              color='inherit'
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
          <CustomButton
            variant="outlined"
            onClick={toggleEdit}
            sx={{ marginTop: 2 }}
          >
            Edit Profile
          </CustomButton>
        </ProfileCard>

        {isEditing && (
          <EditContainer>
            <Typography 
            variant="h6" 
            gutterBottom
            sx={{
                marginTop: "30px",
                marginLeft: "26px"
            }}
            >
              Personal Information
            </Typography>
            <Divider sx={{ marginBottom: 2, mx: '26px' }} />
            <Box display="flex" justifyContent="space-between" px={3}>
              <TextField
                fullWidth
                margin="normal"
                label="First Name"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
                sx={{
                  width: "48%",
                  height: "41px",
                }}
              />
              <TextField
                fullWidth
                margin="normal"
                label="Last Name"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
                sx={{
                  width: "48%",
                  height: "41px",
                  borderRadius: "16px",
                }}
              />
            </Box>
            <Box px={3}>
              <TextField
                fullWidth
                margin="normal"
                label="Username"
                name="username"
                value={profile.username}
                onChange={handleChange}
                sx={{
                  height: "41px",
                }}
              />
            </Box>
            <Box display="flex" justifyContent="center" mt={4}>
              <CustomButton
                variant="outlined"
                onClick={handleUpdate}
                sx={{ 
                  marginTop: "16px",
                  borderColor: "#000",
                  color: "#000",
                  "&:hover": {
                        backgroundColor: "#000",
                        color: "#fff",
                        borderColor: "#fff"
                      },
                }}
              >
                Update
              </CustomButton>
            </Box>
          </EditContainer>
        )}
      </Box>
    </Box>
  );
};

export default ProfilePage;
