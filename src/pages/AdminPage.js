
import { useRef, useState } from 'react';
import {Button, ImageList, ImageListItem, Input} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
function AdminPage() {
    const [imgFile, setImgFile] = useState([]); // 이미지 배열
    const upload = useRef();

    const imgUpload = () => {
        console.log(upload.current.files);
        setImgFile(prev => [...prev, URL.createObjectURL(upload.current.files[0])]);
    }
    return(
        <>

            <br/>
            <Button
                component="label"
                variant="contained"
                startIcon={<CloudUploadIcon />}
                htmlFor="file-upload-input" // Input 요소의 id와 연결
                sx={{display: 'flex', justifyContent: 'center', width: 'fit-content', margin: '0 auto'}}
            >
                Upload file
                <Input
                    id="file-upload-input" // Button 컴포넌트와 연결된 Input 요소의 id
                    type="file"
                    inputRef={upload}
                    multiple
                    onChange={imgUpload}
                    accept="image/*"
                    style={{ display: 'none' }} // 파일 입력 요소를 감춥니다.
                />
            </Button>


            <ImageList sx={{ width: 500, height: 200, margin: '0 auto' }} cols={imgFile.length}>
                {imgFile.map((img, idx) => (
                    <ImageListItem key={idx}>
                        <img
                            style={{ width: '200px', height: '200px ' }}
                            src={img}
                            alt="img"
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </>

    );
};

export default AdminPage;