import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, IconButton, Typography } from "@mui/material"
import SidebarMenu from "../common/SidebarMenu"
import { useParams } from "react-router-dom"
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import VisibilityIcon from '@mui/icons-material/Visibility'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from "react"
import './style/noticeDetail.css'

const NoticeDetail = () => {
    // 게시글 ID 획득
    const { id } = useParams()

    const [comments] = useState([
        { user: "소전마미", date: "24-03-25 (월)", text: "연수 신청했습니다. 이번 연수도 기대가 됩니다." },
        { user: "냉각수", date: "24-03-25 (월)", text: "네. 신청했어요. 감사합니다." },
        { user: "박주미", date: "24-03-25 (월)", text: "🔒 비밀글이에요!" },
        { user: "관리자", date: "24-03-25 (월)", text: "네. 선생님 연수 전에 단톡방 초대하여 안내드립니다." },
    ]);
    

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
                        marginBottom: 5
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
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography>
                            댓글
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        {comments.map((comment, index) => (
                            <div
                                key={index}
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    borderBottom: "1px solid #ddd",
                                    padding: "10px 0",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                                    <div style={{ display: "flex", alignItems: "center" }}>
                                        <Typography variant="body1" style={{ fontWeight: "bold", marginRight: 8 }}>
                                            {comment.user}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {comment.date}
                                        </Typography>
                                    </div>
                                    <IconButton>
                                        <MoreVertIcon />
                                    </IconButton>
                                </div>
                                <Typography variant="body2" style={{ marginTop: 8 }}>
                                    {comment.text}
                                </Typography>
                                <div style={{ marginTop: 8, display: "flex", alignItems: "center" }}>
                                    <IconButton size="small" color="primary">
                                        <FavoriteIcon fontSize="small" />
                                    </IconButton>
                                    <Typography variant="caption" style={{ marginLeft: 4 }}>
                                        답변 좋아요! 0
                                    </Typography>
                                </div>
                            </div>
                        ))}
                    </AccordionDetails>         
                </Accordion>
            </div>
        </div>
    )
}

export default NoticeDetail