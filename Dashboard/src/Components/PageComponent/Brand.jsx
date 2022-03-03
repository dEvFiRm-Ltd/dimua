import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Copyright from '../Copyright';
import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import FileUpload from '../FileUpload';

export default function Brand() {
  const [newUserInfo, setNewUserInfo] = useState({
    images: [],
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, images: files });
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  console.log(newUserInfo);
  return (
    <Box
      component='main'
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <Toolbar />
      <Container maxWidth='lg' sx={{ mt: 4 }}>
        <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item lg={4} xs={12} sm={6}>
              <TextField
                name='title'
                required
                fullWidth
                id='firstName'
                style={{ backgroundColor: 'white' }}
                label='Brand Name'
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FileUpload
                accept='.jpg,.png,.jpeg'
                label='Profile Image(s)'
                multiple
                updateFilesCb={updateUploadedFiles}
              />
            </Grid>
            <Grid container justifyContent={'center'} sx={{ my: 2 }}></Grid>
            <Grid container justifyContent={'center'}>
              <Grid item lg={1}>
                <Button sx={{ mx: 1 }} variant='contained'>
                  Cancelled
                </Button>
              </Grid>
              <Grid item lg={1}>
                <Button sx={{ mx: 1 }} variant='outlined'>
                  Cancelled
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </Box>
  );
}
