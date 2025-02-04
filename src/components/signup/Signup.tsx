import { Box, Button, Divider, FormControlLabel, TextField, Typography } from '@mui/material'
import './style/signup.css'
import { CheckBox } from '@mui/icons-material'

const Signup = () => {
    return (
        <div className="signup">
            <div className="signup-container">
                <Box sx={{ width: '90.5%', marginBottom: '30px', marginLeft: 8.3 }}>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                        회원가입
                    </Typography>
                    <Divider sx={{ marginTop: '10px' }} />
                </Box>
                <Box
                    sx={{
                        p: 4,
                        border: '1px solid #DDD',
                        borderRadius: '8px',
                        backgroundColor: '#FFF',
                        width: '100%',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        marginBottom: 5
                    }}
                >
                    <Box sx={{ my: -1 }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 4 }}>
                            기본정보
                        </Typography>
                    </Box>
                    <Box sx={{ mx: -4, mb: 4 }}>
                        <Divider />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2
                        }}
                    >
                        <Typography sx={{
                            flex: '0 120px',
                            fontWeight: 'bold',
                            lineHeight: '40px'
                        }}>
                            아이디
                        </Typography>
                        <TextField 
                            placeholder='ID'
                            variant='outlined'
                            size='small'
                            sx={{
                                flex: '1',
                                maxWidth: '38.3%',
                                marginRight: '10px',
                                backgroundColor: '#F9F9F9'
                            }}
                            required
                        />
                        <Button
                            variant='contained'
                            sx={{
                                backgroundColor: '#555',
                                color: '#FFF',
                                marginLeft: 2,
                                '&:hover': { backgroundColor: '#333' }
                            }}
                        >
                            ID 중복확인
                        </Button>
                        <Box 
                            sx={{
                                display: 'flex',
                                pl: 3
                            }}
                        >
                            <Typography variant='caption' color='textSecondary'>
                                최소 3자 이상 영문, 숫자, _ 만 입력 가능합니다
                            </Typography>
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mt: 3,
                            mb: 2
                        }}
                    >
                        <Typography 
                            sx={{
                                flex: '0 0 120px',
                                fontWeight: 'bold',
                                lineHeight: '40px'
                            }}
                        >
                            비밀번호
                        </Typography>
                        <TextField 
                            placeholder='비밀번호'
                            type='password'
                            variant='outlined'
                            size='small'
                            sx={{
                                flex: '1',
                                backgroundColor: '#F9F9F9',
                                maxWidth: '40%'
                            }}
                            required
                        />
                        <Typography
                            sx={{
                                flex: '0 0 120px',
                                fontWeight: 'bold',
                                lineHeight: '40px',
                                pl: 5
                            }}
                        >
                            비밀번호 확인
                        </Typography>
                        <TextField 
                            placeholder='비밀번호 확인'
                            type='password'
                            variant='outlined'
                            size='small'
                            sx={{
                                flex: '1',
                                backgroundColor: '#F9F9F9',
                                maxWidth: '40%'
                            }}
                            required
                        />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2
                        }}
                    >
                        <Typography sx={{
                            flex: '0 120px',
                            fontWeight: 'bold',
                            lineHeight: '40px'
                        }}>
                            Email
                        </Typography>
                        <TextField 
                            placeholder='Email'
                            variant='outlined'
                            size='small'
                            sx={{
                                flex: '1',
                                maxWidth: '38.3%',
                                marginRight: '10px',
                                backgroundColor: '#F9F9F9'
                            }}
                            required
                        />
                        <Button
                            variant='contained'
                            sx={{
                                backgroundColor: '#555',
                                color: '#FFF',
                                marginLeft: 2,
                                '&:hover': { backgroundColor: '#333' }
                            }}
                        >
                            인증번호 전송
                        </Button>
                        <TextField 
                            placeholder='인증번호'
                            variant='outlined'
                            size='small'
                            sx={{
                                flex: '1',
                                maxWidth: '20.3%',
                                marginLeft: '22px',
                                backgroundColor: '#F9F9F9'
                            }}
                            required
                        />
                        <Button
                            variant='contained'
                            sx={{
                                backgroundColor: '#555',
                                color: '#FFF',
                                marginLeft: 1,
                                '&:hover': { backgroundColor: '#333' }
                            }}
                        >
                            확인
                        </Button>
                    </Box>
                </Box>

                <Box
                    sx={{
                        p: 4,
                        border: '1px solid #DDD',
                        borderRadius: '8px',
                        backgroundColor: '#FFF',
                        width: '100%',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        marginBottom: 5
                    }}
                >
                    <Box sx={{ my: -1 }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 4 }}>
                            추가정보
                        </Typography>
                    </Box>
                    <Box sx={{ mx: -4, mb: 4 }}>
                        <Divider />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 2
                        }}
                    >
                        <Typography sx={{
                            flex: '0 120px',
                            fontWeight: 'bold',
                            lineHeight: '40px'
                        }}>
                            닉네임
                        </Typography>
                        <TextField 
                            placeholder='닉네임'
                            variant='outlined'
                            size='small'
                            sx={{
                                flex: '1',
                                maxWidth: '38.3%',
                                marginRight: '10px',
                                backgroundColor: '#F9F9F9'
                            }}
                        />
                        <Button
                            variant='contained'
                            sx={{
                                backgroundColor: '#555',
                                color: '#FFF',
                                marginLeft: 2,
                                '&:hover': { backgroundColor: '#333' }
                            }}
                        >
                            닉네임 중복확인
                        </Button>
                        <Box 
                            sx={{
                                display: 'flex',
                                pl: 3
                            }}
                        >
                            <Typography variant='caption' color='textSecondary'>
                                한글, 영문, 숫자만 입력 가능합니다 (설정하지 않을 시 임의의 닉네임 자동 설정)
                            </Typography>
                        </Box>
                    </Box>
                </Box>

                <Box
                    sx={{
                        p: 4,
                        border: '1px solid #DDD',
                        borderRadius: '8px',
                        backgroundColor: '#FFF',
                        width: '100%',
                        maxWidth: '1200px',
                        margin: '0 auto'
                    }}
                >
                    <Box sx={{ my: -1 }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 4 }}>
                            수신동의
                        </Typography>
                    </Box>
                    <Box sx={{ mx: -4, mb: 4 }}>
                        <Divider />
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            mb: 1
                        }}
                    >
                        <Typography sx={{
                            flex: '0 135px',
                            fontWeight: 'bold',
                            lineHeight: '40px'
                        }}>
                            메일수신동의
                        </Typography>
                        <FormControlLabel 
                            sx={{
                                gap: '7px'
                            }}
                            control={
                                <CheckBox />
                            }
                            label={
                                <Typography
                                    sx={{
                                        fontSize: '14px',
                                        color: '#000'
                                    }}
                                >
                                    정보성 메일 및 인증 관련 메일 수신에 동의합니다.
                                </Typography>
                            }
                        />
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 5 }}>
                    <Button variant='contained' sx={{ height: 50, width: 200 }}>회원가입</Button>
                </Box>
            </div>
        </div>
    )
}

export default Signup