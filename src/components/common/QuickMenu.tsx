import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material"
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const QuickMenu = () => {
    const navigate = useNavigate()
    const [offsetTop, setOffsetTop] = useState(100) // 초기 위치

    useEffect(() => {
        const handleScroll = () => {
            setOffsetTop(window.scrollY + 100)      // 스크롤에 따라 이동
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const handleClickHome = () => {
        navigate('/')
    }

    const handleClickInquiry = () => {
        navigate('/inquiry')
    }

    const handleClickLogin = () => {
        navigate('/login')
    }

    const handleClickSignup = () => {
        navigate('/signup')
    }

    return (
        <Box
            sx={{
                position: 'absolute',
                top: `${offsetTop}px`,
                right: 180,
                width: 100
            }}
        >
            <Paper elevation={3} sx={{ borderRadius: '10px', overflow: 'hidden' }}>
                <Box sx={{ backgroundColor: '#9E0011', padding: '10px', textAlign: 'center' }}>
                    <Typography sx={{ color: '#FFF', fontWeight: 'bold', fontSize: 12 }}>
                        QUICK MENU
                    </Typography>
                </Box>

                <List sx={{ padding: 0 }}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ flexDirection: 'column', textAlign: 'center' }} onClick={handleClickSignup}>
                            <AppRegistrationIcon sx={{ fontSize: 30, color: '9EC346' }} />
                            <Typography sx={{ fontSize: "12px", color: "#666", textAlign: "center", fontWeight: 'bold' }}>
                                회원가입
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ flexDirection: 'column', textAlign: 'center' }} onClick={handleClickLogin}>
                            <LockOpenIcon sx={{ fontSize: 30, color: '9EC346' }} />
                            <Typography sx={{ fontSize: "12px", color: "#666", textAlign: "center", fontWeight: 'bold' }}>
                                로그인
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ flexDirection: 'column', textAlign: 'center' }} onClick={handleClickHome}>
                            <DashboardIcon sx={{ fontSize: 30, color: '9EC346' }} />
                            <Typography sx={{ fontSize: "12px", color: "#666", textAlign: "center", fontWeight: 'bold' }}>
                                홈
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ flexDirection: 'column', textAlign: 'center' }} onClick={handleClickInquiry}>
                            <SupportAgentIcon sx={{ fontSize: 30, color: '9EC346' }} />
                            <Typography sx={{ fontSize: "12px", color: "#666", textAlign: "center", fontWeight: 'bold' }}>
                                1:1 문의
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ flexDirection: 'column', textAlign: 'center' }} href="#section3">
                            <AccountCircleIcon sx={{ fontSize: 30, color: '9EC346' }} />
                            <Typography sx={{ fontSize: "12px", color: "#666", textAlign: "center", fontWeight: 'bold' }}>
                                내 정보
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                </List>

                <Box
                    sx={{
                        backgroundColor: '#333',
                        padding: '10px',
                        textAlign: 'center',
                        cursor: 'pointer'
                    }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                    <Typography sx={{ color: '#FFF', fontWeight: 'bold', fontSize: 12 }}>
                        TOP
                    </Typography>
                </Box>
            </Paper>
        </Box>
    )
}

export default QuickMenu