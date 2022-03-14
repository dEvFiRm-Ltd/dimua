import React, { useState } from 'react';
import FileUpload from './file-upload.component';

function App() {
  const [newUserInfo, setNewUserInfo] = useState({
    profileImages: [],
  });

  const updateUploadedFiles = (files) =>
    setNewUserInfo({ ...newUserInfo, profileImages: files });

  const handleSubmit = (event) => {
    event.preventDefault();
    //logic to create new user...
  };

  return (
    <>
      <div style={{ marginTop: '70px' }}>
        <form onSubmit={handleSubmit}>
          <FileUpload
            accept='.jpg,.png,.jpeg'
            label='Profile Image(s)'
            multiple
            updateFilesCb={updateUploadedFiles}
          />
          <button type='submit'>Create New User</button>
        </form>
      </div>
    </>
  );
}

export default App;