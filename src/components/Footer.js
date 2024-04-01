import { Container, Typography } from '@mui/material';
function Footer() {
    const footerTexts = [
        '© 2020-2024 · 블랑셰어하우스, All Rights Reserved',
        '대표자 : 심대보 | 사업자 등록번호 : 111 - 12 - 7123456',
        '서울특별시 서대문구 홍제동 561-31, 머시기빌라 6F',
        '대표번호 : 010-1234-5678'
    ];

    return(
        <Container  sx={{ py: 2, color: '#9c9c9c',textAlign: 'center' }}>
            {footerTexts.map((text, index) => (
                <Typography key={index} variant="body2" sx={{ fontSize: '12px' }}>
                    {text}
                </Typography>
            ))}
        </Container>
    );
}

export default Footer