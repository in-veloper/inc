import { Box, Divider, Typography } from "@mui/material"
import SidebarMenu from "../common/SidebarMenu"
import { useParams } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import VisibilityIcon from '@mui/icons-material/Visibility'
import './style/noticeDetail.css'

const NoticeDetail = () => {
    // 게시글 ID 획득
    const { id } = useParams()

    return (
        <div className="notice-detail">
            <SidebarMenu />
            <div className="notice-detail-container">
                <Box sx={{ width: '100%', marginBottom: '30px' }}>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                        공지사항
                    </Typography>
                    <Divider sx={{ marginTop: '10px' }} />
                </Box>
                <Box
                    sx={{
                        p: 3,
                        border: '1px solid #DDD',
                        borderRadius: '5px',
                        backgroundColor: '#FFF',
                    }}
                >
                    <Box sx={{ my: -1 }}>
                        <Typography variant='h6' sx={{ fontWeight: 'bold', mb: 3 }}>
                            공지사항 제목 1
                        </Typography>
                    </Box>
                    <Box sx={{ mx: -3, mb: 4 }}>
                        <Divider />
                    </Box>
                    <Box sx={{ display: 'flex', my: -3, justifyContent: 'space-between', color: '#666' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <AccountCircleIcon sx={{ marginRight: 1, mb: 4 }} />
                            <Typography sx={{ mb: 4, fontSize: '15px' }}>
                                admin
                            </Typography>
                            <CalendarMonthIcon sx={{ marginRight: 1, marginLeft: 2, mb: 4 }} />
                            <Typography sx={{ mb: 4, fontSize: '15px' }}>
                                2020-05-04 08:42:37
                            </Typography>
                            <VisibilityIcon sx={{ marginLeft: 2, marginRight: 1, mb: 4 }} />
                            <Typography sx={{ mb: 4, fontSize: '15px' }}>
                                15
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', gap: '13px' }}>
                            <ModeEditIcon sx={{ cursor: 'pointer' }}/>
                            <FormatListBulletedIcon sx={{ cursor: 'pointer' }} />
                        </Box>
                    </Box>
                    <Box sx={{ mx: -3, mb: 4 }}>
                        <Divider />
                    </Box>
                    <Box sx={{ minHeight: '200px' }}>
                        <Typography>
                            공지사항 내용
                        </Typography>
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default NoticeDetail