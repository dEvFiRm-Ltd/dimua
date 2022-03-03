import React, { useRef, useState } from 'react';
import {
  FileUploadContainer,
  FormField,
  DragDropText,
  FilePreviewContainer,
  ImagePreview,
  PreviewContainer,
  PreviewList,
  FileMetaData,
} from './fileuploads.styles';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const convertNestedObjectToArray = (nestedObj) =>
  Object.keys(nestedObj).map((key) => nestedObj[key]);

const convertBytesToKB = (bytes) => Math.round(bytes / 1000);

const FileUpload = ({
  updateFilesCb,
  maxFileSizeInBytes = 500000,
  ...otherProps
}) => {
  const fileInputField = useRef(null);
  const [files, setFiles] = useState({});

  const addNewFiles = (newFiles) => {
    for (let file of newFiles) {
      if (file.size <= maxFileSizeInBytes) {
        if (!otherProps.multiple) {
          return { file };
        }
        files[file.name] = file;
      } else {
        console.log('Too Big to swallow');
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
    callUpdateFilesCb({ ...files });
  };

  return (
    <>
      {!Object.keys(files).length ? (
        <FileUploadContainer>
          <DragDropText>Drag and drop your files anywhere or</DragDropText>
          <FormField
            ref={fileInputField}
            type='file'
            onChange={handleNewFileUpload}
            title=''
            value=''
            {...otherProps}
          />
        </FileUploadContainer>
      ) : (
        <>
          <FilePreviewContainer>
            <span>To Upload</span>
            <PreviewList>
              {Object.keys(files).map((fileName, index) => {
                let file = files[fileName];
                let isImageFile = file.type.split('/')[0] === 'image';
                return (
                  <PreviewContainer key={fileName}>
                    <div>
                      {isImageFile && (
                        <ImagePreview
                          src={URL.createObjectURL(file)}
                          alt={`file preview ${index}`}
                        />
                      )}
                      <FileMetaData isImageFile={isImageFile}>
                        <span>{file.name}</span>
                        <aside>
                          <span>{convertBytesToKB(file.size)} kb</span>
                          <DeleteOutlineOutlinedIcon
                            sx={{
                              cursor: 'pointer',
                              '&:hover': {
                                transform: 'scale(1.3)',
                              },
                            }}
                            onClick={() => removeFile(fileName)}
                          />
                        </aside>
                      </FileMetaData>
                    </div>
                  </PreviewContainer>
                );
              })}
            </PreviewList>
          </FilePreviewContainer>
        </>
      )}
    </>
  );
};

export default FileUpload;
