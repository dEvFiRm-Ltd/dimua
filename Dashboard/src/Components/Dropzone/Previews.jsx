import React, { useEffect, useState } from 'react';
import { Img, UploadPreview } from './index.style';
import CancelIcon from '@mui/icons-material/Cancel';

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

function Previews({ images, updateFilesCb }) {
  const [files, setFiles] = useState({ ...images });

  const callUpdateFilesCb = (files) => {
    const filesAsArray = convertNestedObjectToArray(files);
    updateFilesCb(filesAsArray);
  };

  const removeFile = (fileName) => {
    delete files[fileName];
    setFiles({ ...files });
    callUpdateFilesCb({ ...files });
  };

  useEffect(() => {
    setFiles({ ...images });
  }, [images]);

  return (
    <UploadPreview>
      {Object.keys(files).map((fileName, index) => {
        let file = files[fileName];

        return (
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
        );
      })}
    </UploadPreview>
  );
}

export default Previews;
