import React, { useState } from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import { File, Filebox, Img, UploadPreview } from './index.style';
import { Grid } from '@mui/material';

// Code to show file size in KB

/* const KILO_BYTES_PER_BYTE = 1000;
const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE); */

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

function Dropzone({
  updateFilesCb,
  maxFileSizeInBytes = 500000,
  ...otherProps
}) {
  const [files, setFiles] = useState({});
  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      }
    }
    return { ...files };
  };

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const handleNewFileUpload = (e) => {
    const { files: newFiles } = e.target;
    if (newFiles.length) {
      let updatedFiles = addNewFiles(newFiles);
      setFiles(updatedFiles);
      callUpdateFilesCb(updatedFiles);
    }
  };

  const removeFile = (fileName) => {
    delete files[fileName];
    setFiles({ ...files });
    // callUpdateFilesCb({ ...files });
  };
  return (
    <>
      <Grid item lg={6}>
        <Filebox>
          Upload
          <File {...otherProps} type='file' onChange={handleNewFileUpload} />
        </Filebox>
      </Grid>

      <Grid item lg={6}>
        <Grid container>
          {Object.keys(files).map((fileName, index) => {
            let file = files[fileName];
            // let isImageFile = file.type.split('/')[0] === 'image';
            return (
              <Grid item lg={3} key={index}>
                <UploadPreview>
                  <Img key={index}>
                    <CancelIcon
                      sx={{
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        zIndex: '12',
                        display: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease-in-out',
                        transform: 'scale(0)',
                      }}
                      onClick={() => removeFile(fileName)}
                    />
                    <img src={URL.createObjectURL(file)} alt='' />
                  </Img>
                </UploadPreview>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
}

export default Dropzone;
