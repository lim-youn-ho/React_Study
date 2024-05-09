
import { useRef, useState } from 'react';
import {
    Box,
    Button,
    Card,
    Container, Divider, FormControl, FormControlLabel,
    FormLabel,
    ImageList,
    ImageListItem,
    Input, Radio,
    RadioGroup, Stack,
    TextField
} from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
function AdminPage() {
    const [imgFile, setImgFile] = useState([]); // 이미지 배열
    const upload = useRef();

    const imgUpload = () => {
        console.log(upload.current.files);
        setImgFile(prev => [...prev, URL.createObjectURL(upload.current.files[0])]);
    }

    const [roomCount, setRoomCount] = useState(1); // 초기 방 개수는 1개

    // 방 개수가 변경될 때 호출되는 함수
    const handleRoomCountChange = (event) => {
        const count = parseInt(event.target.value) || 0; // 입력된 값이 숫자가 아니면 0으로 처리
        setRoomCount(count);
    };


    const renderTextField = () => {
        const textFields = [];
        for (let i = 0; i < roomCount; i++) {
            textFields.push(
                <div style={{ display: 'flex', marginBottom: '10px' }} key={i}>
                    <TextField
                        id={`room-${i}`}
                        label={`${i + 1} 번 room`}
                        variant="outlined"
                        style={{ marginRight: '10px' }} // 각 TextField 사이에 간격을 추가
                    />
                    <TextField
                        id={`room-${i}`}
                        label={`${i + 1} 번 보증금`}
                        variant="outlined"
                    />
                    <TextField
                        id={`room-${i}`}
                        label={`${i + 1} 번 월세`}
                        variant="outlined"
                    />
                </div>
            );
        }
        return textFields;
    };

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
                            지점 이미지 업로드
                            <Input
                                id="file-upload-input" // Button 컴포넌트와 연결된 Input 요소의 id
                                type="file"
                                inputRef={upload}
                                multiple
                                onChange={imgUpload}
                                accept="image/*"
                                style={{ display: 'none' }}
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
                        <Box sx={{width: 400,  height: '600px', overflow: 'hidden' , display: 'flex', flexDirection: 'column', '& > *': { marginBottom: '20px' }  }}>
                            <TextField id="outlined-basic" label="지점명" variant="outlined" />

                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">남여 구분</FormLabel>
                                <RadioGroup row  defaultValue="female">
                                    <FormControlLabel value="female" control={<Radio />} label="여성" />
                                    <FormControlLabel value="male" control={<Radio />} label="남성" />
                                </RadioGroup>
                            </FormControl>
                            <Divider />
                            <br/>
                            <TextField
                                id="room-count"
                                label="방 개수"
                                variant="outlined"
                                type="number"
                                value={roomCount}
                                onChange={handleRoomCountChange}
                            />
                            <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}>

                            <Stack   justifyContent="center">
                                {renderTextField()}

                            </Stack>

                            </Box>


                        </Box>
                    </Card>
                </Box>
            </div>
        </Container>
    );
};

export default AdminPage;