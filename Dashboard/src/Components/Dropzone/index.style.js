import styled from '@emotion/styled';

// Style for Upload components

export const Filebox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 110px;
  border: 3px solid #e6e6e6;
  border-radius: 15px;
  padding: 10px 0;
  background-color: #fafafa;
  &:active {
    background-color: #e6e6e6;
    opacity: 0.31;
  }
`;

export const File = styled.input`
  font-size: 18px;
  display: block;
  width: 100%;
  border: none;
  text-transform: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  cursor: pointer;
  z-index: 12;

  &:focus {
    outline: none;
  }
`;

// Style for Upload components Ends Here

// Style for Preview components

export const UploadPreview = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;
export const Img = styled.div`
  width: 130px;
  height: 110px;
  border: 3px solid #e6e6e6;
  border-radius: 15px;
  margin: 10px;
  background-color: #fafafa;
  transition: all 0.3s ease-in-out;
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &:hover {
    svg {
      transform: scale(1);
      display: block;
    }
  }
`;

// Style for Preview components Ends Here
