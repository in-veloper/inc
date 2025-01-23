import { Box, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import PersonIcon from "@mui/icons-material/Person"
import GroupIcon from "@mui/icons-material/Group"
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward"
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
                right: 180,
                width: 120
            }}
        >
            <Paper elevation={3} sx={{ borderRadius: '10px', overflow: 'hidden' }}>
                <Box sx={{ backgroundColor: '#9EC346', padding: '10px', textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ color: '#FFF', fontWeight: 'bold' }}>
                        QUICK MENU
                    </Typography>
                </Box>

                <List sx={{ padding: 0 }}>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ flexDirection: 'column', textAlign: 'center' }} href="#section1">
                            <HomeIcon sx={{ fontSize: 30, color: '9EC346' }} />
                            <Typography sx={{ fontSize: "13px", color: "#666", textAlign: "center" }}>
                                직업건강웹진
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ flexDirection: 'column', textAlign: 'center' }} href="#section2">
                            <PersonIcon sx={{ fontSize: 30, color: '9EC346' }} />
                            <Typography sx={{ fontSize: "13px", color: "#666", textAlign: "center" }}>
                                경력관리시스템
                            </Typography>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton sx={{ flexDirection: 'column', textAlign: 'center' }} href="#section3">
                            <GroupIcon sx={{ fontSize: 30, color: '9EC346' }} />
                            <Typography sx={{ fontSize: "13px", color: "#666", textAlign: "center" }}>
                                조직도
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
                    <Typography variant="body2" sx={{ color: '#FFF', fontWeight: 'bold' }}>
                        TOP
                    </Typography>
                </Box>
            </Paper>
        </Box>
    )
}

export default QuickMenu