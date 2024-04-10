
import { useRef, useState } from 'react';
import {Box, Button, Card, Container, ImageList, ImageListItem, Input, TextField} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
function AdminPage() {
    const [imgFile, setImgFile] = useState([]); // 이미지 배열
    const upload = useRef();

    const imgUpload = () => {
        console.log(upload.current.files);
        setImgFile(prev => [...prev, URL.createObjectURL(upload.current.files[0])]);
    }
    return(
        <Container>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)',width:600 }}>
                    <Card sx={{ maxHeight:600, variant:"outlined",padding:'10px',margin:'10px'}}>
                        <br />
                        <Button
                            component="label"
                            variant="contained"
                            startIcon={<CloudUploadIcon />}
                            htmlFor="file-upload-input" // Input 요소의 id와 연결
                            sx={{ display: 'flex', justifyContent: 'center', width: 'fit-content', margin: '0 auto' }}
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
                        <br />
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
                    </Card>
                </Box>
                <Box  component="form" noValidate
                      autoComplete="off" sx={{maxHeight:600,display: 'inline-block', mx: '2px', transform: 'scale(0.8)',cols:1  }}>
                    <Card sx={{ width: 500 ,maxHeight:600, variant:"outlined",padding:'10px',margin:'10px'}}>
                        <Box sx={{width: 200 , display: 'flex', flexDirection: 'column', '& > *': { marginBottom: '10px' }  }}>
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField id="filled-basic" label="Filled" variant="filled" />

                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                        </Box>
                    </Card>
                </Box>
            </div>
        </Container>
    );
};

export default AdminPage;