import React from 'react';
import { Box, Button, Container, Typography, Divider } from '@mui/material';
import { styled } from '@mui/system';
import FileIcon from '@mui/icons-material/Description';

const ScoreBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#222',
  color: '#fff',
  borderRadius: '12px',
  padding: '32px',
  width: '200px',
  height: '150px',
  marginRight: theme.spacing(4),
  boxShadow: theme.shadows[5],
}));

const FileBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#222',
  color: '#fff',
  borderRadius: '12px',
  padding: '16px',
  width: '200px',
  boxShadow: theme.shadows[5],
  marginTop: theme.spacing(2),
  marginRight: theme.spacing(4),
}));

const FeedbackBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: '#fff',
  border: '2px solid #fff',
  borderRadius: '12px',
  padding: '32px',
  width: '600px',
  height: 'auto',
  boxShadow: theme.shadows[5],
  position: 'relative',
}));

const CustomButton = styled(Button)(({ theme }) => ({
  borderColor: '#fff',
  borderWidth: '2px',
  borderStyle: 'solid',
  borderRadius: '6px',
  backgroundColor: 'transparent',
  color: '#fff',
  position: 'absolute',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  '&:hover': {
    backgroundColor: '#f0f0f0',
    color: '#000',
  },
}));

const ResponsePage = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" backgroundColor="#101010" color="#fff">
      <Box display="flex" alignItems="flex-start">
        <Box>
          <ScoreBox>
            <Typography variant="h6" >Your Score :</Typography>
            <Typography variant="h1" fontWeight="bold">95</Typography>
            <Typography variant="h6" >of 100</Typography>
          </ScoreBox>
          <FileBox>
            <FileIcon fontSize="large" />
            <Box ml={2}>
              <Typography>My Essay.pdf</Typography>
              <Typography variant="caption">5.7 MB</Typography>
            </Box>
          </FileBox>
        </Box>
        <FeedbackBox>
          <Typography variant="h6">Feedback:</Typography>
          <Divider sx={{ my: 2 }} />
          <Typography variant="body1" paragraph>
            1. Penjelasan dan Memperkuat Alasan dan Tujuan Penulis dalam Rencana Studi
          </Typography>
          <Typography variant="body2" paragraph>
            Esai ini menjelaskan tujuan penulis untuk melanjutkan studi di bidang TESOL,
            tetapi penjelasannya kurang mendalam dan kurang memperkuat alasan mengapa program tersebut penting bagi penulis.
          </Typography>
          <Typography variant="body1" paragraph>
            2. Rencana Kegiatan dari Awal Studi hingga Akhir dan Waktu yang Dibutuhkan
          </Typography>
          <Typography variant="body2" paragraph>
            Penulis memberikan penjelasan singkat tentang rencana kegiatan dan waktu yang dibutuhkan untuk menyelesaikan studi. Meskipun ada beberapa detail, penjelasan ini tidak cukup mendalam.
          </Typography>
          <Typography variant="body1" paragraph>
            3. Penjelasan Rencana Studi dengan Sedetail Mungkin
          </Typography>
          <Typography variant="body2" paragraph>
            Penjelasan tentang rencana studi dan mata kuliah yang akan diambil cukup baik, tetapi bisa lebih rinci. Penulis menyebutkan beberapa mata kuliah tetapi tidak menjelaskan secara mendalam relevansinya dengan tujuan karir.
          </Typography>
          <Typography variant="body1" paragraph>
            4. Penulisan Sesuai Struktur Esai yang Benar
          </Typography>
          <Typography variant="body2" paragraph>
            Penulisan esai ini memiliki struktur dasar yang cukup baik, tetapi kurang terorganisir dengan baik. Transisi antarbagian bisa diperhalus, dan alur esai bisa lebih kohesif.
          </Typography>
          <Box display="flex" justifyContent="flex-end">
            <CustomButton variant="outlined">
              Submit another
            </CustomButton>
          </Box>
        </FeedbackBox>
      </Box>
    </Box>
  );
};

export default ResponsePage;
