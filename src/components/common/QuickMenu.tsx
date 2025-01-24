import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material"
import DashboardIcon from '@mui/icons-material/Dashboard';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useEffect, useState } from "react"

const QuickMenu = () => {
    const [offsetTop, setOffsetTop] = useState(100) // 초기 위치

    useEffect(() => {
        const handleScroll = () => {
            setOffsetTop(window.scrollY + 100)      // 스크롤에 따라 이동
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <Box
            sx={{
                position: 'absolute',
                top: `${offsetTop}px`,
                right: 200,
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
                        <ListItemButton sx={{ flexDirection: 'column', textAlign: 'center' }} href="#section1">
                            <DashboardIcon sx={{ fontSize: 30, color: '9EC346' }} />
                            <Typography sx={{ fontSize: "12px", color: "#666", textAlign: "center" }}>
                                홈
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ flexDirection: 'column', textAlign: 'center' }} href="#section2">
                            <SupportAgentIcon sx={{ fontSize: 30, color: '9EC346' }} />
                            <Typography sx={{ fontSize: "12px", color: "#666", textAlign: "center" }}>
                                1:1 문의
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ flexDirection: 'column', textAlign: 'center' }} href="#section3">
                            <AccountCircleIcon sx={{ fontSize: 30, color: '9EC346' }} />
                            <Typography sx={{ fontSize: "12px", color: "#666", textAlign: "center" }}>
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