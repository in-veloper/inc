import { Box, Button, Divider, FormControlLabel, TextField, Typography } from '@mui/material'
import { CheckBox } from '@mui/icons-material'
import './style/login.css'

const Login = () => {
    return (
        <div className="login">
            <div className="login-container">
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '69vh',
                    }}
                >
                    <Box
                        sx={{
                            width: '100%',
                            maxWidth: '400px',
                            p: 4,
                            backgroundColor: '#FFFFFF'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                ml: 2
                            }}
                        >
                            <Typography variant='h4' component='h1' align='center' style={{ fontWeight: 'bold', marginRight: 10 }} gutterBottom>
                                LOGIN
                            </Typography>
                            <Divider orientation='vertical' sx={{ height: 23, marginTop: '10px', borderWidth: '2px' }} flexItem />
                            <Typography variant='h5' component='h1' align='center' style={{ fontWeight: 'bold', marginLeft: 10, color: '#707070' }} gutterBottom>
                                로그인
                            </Typography>
                        </Box>
                        <TextField 
                            fullWidth
                            placeholder='아이디'
                            variant='outlined'
                            margin='normal'
                        />
                        <TextField 
                            fullWidth
                            placeholder='비밀번호'
                            type='password'
                            variant='outlined'
                            margin='normal'
                        />
                        <FormControlLabel 
                            control={<CheckBox />}
                            label='자동로그인'
                            sx={{ 
                                display: 'flex',
                                justifyContent: 'flex-end',
                                gap: '7px',
                                mt: 1,
                                mb: 2,
                                color: '#707070' 
                            }}
                        />
                        <Button
                            fullWidth
                            variant='contained'
                            size='large'
                            sx={{ backgroundColor: '#1A73E8', mb: 2, height: 56 }}
                        >
                            로그인
                        </Button>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                mt: 1,
                                pl: 1,
                                pr: 1
                            }}
                        >
                            <Typography
                                variant='body2'
                                component='a'
                                href='#'
                                style={{ textDecoration: 'none', color: '#707070', fontWeight: 'bold' }}
                            >
                                회원가입
                            </Typography>
                            <Typography
                                variant='body2'
                                component='a'
                                href='#'
                                style={{ textDecoration: 'none', color: '#707070', fontWeight: 'bold' }}
                            >
                                아이디 · 비밀번호 찾기
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default Login