import { Accordion, AccordionDetails, AccordionSummary, Box, Divider, IconButton, Typography, Chip, Menu, MenuItem, Button } from "@mui/material"
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
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useRef, useState } from "react"
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import './style/noticeDetail.css'

const NoticeDetail = () => {
    const [menuAnchor, setMenuAnchor] = useState(null)
    const [selectedComment, setSelectedComment] = useState(null)
    const [editorState, setEditorState] = useState(EditorState.createEmpty());

    // 게시글 ID 획득
    const { id } = useParams()

    const [comments, setComments] = useState([
        { 
            user: "admin", 
            date: "2020-05-07 11:42:37", 
            text: "연수 신청했습니다. 이번 연수도 기대가 됩니다.",
            replies: [
                { user: "관리자", date: "2020-05-07 12:00:00", text: "감사합니다. 열심히 준비하겠습니다." },
                { user: "관리자", date: "2020-05-07 12:00:00", text: "감사합니다!" },
            ],
        },
        { user: "yiniwini", date: "2020-02-04 08:42:37", text: "네. 신청했어요. 감사합니다." , replies: [] },
        { user: "정영인", date: "2020-03-04 03:42:37", text: "🔒 비밀글이에요!", replies: [] },
        { 
            user: "관리자", 
            date: "2020-05-01 07:42:37", 
            text: "네. 선생님 연수 전에 단톡방 초대하여 안내드립니다.", 
            replies: [
                { user: "정영인", date: "2020-05-07 12:00:00", text: "기대됩니다!" },
            ]
        },
    ]);

    // 댓글 우측 Menu Open
    const handleMenuOpen = (event: any, comment: any) => {
        setMenuAnchor(event.currentTarget)
        setSelectedComment(comment)
    }

    // 댓글 우측 Menu Close
    const handleMenuClose = () => {
        setMenuAnchor(null)
        setSelectedComment(null)
    }

    // 댓글 Edit
    const handleEdit = () => {
        handleMenuClose()
    }
    
    // 댓글 Delete
    const handleDelete = () => {
        handleMenuClose()
    }

    const handleAddComment = () => {
        const contentState = editorState.getCurrentContent()
        const text = contentState.getPlainText()

        if(text.trim() === "") return

        const newComment = {
            user: "현재 사용자",
            date: new Date().toISOString(),
            text: text,
            replies: []
        }

        setComments([...comments, newComment])
        setEditorState(EditorState.createEmpty())
    }

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
                <Box>
                    <Accordion defaultExpanded sx={{ border: '1px solid #DDD', borderRadius: '5px', boxShadow: 0 }}>
                        <AccordionSummary sx={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #DDD' }} expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ fontWeight: 'bold' }}>
                                댓글
                            </Typography>
                            <Chip 
                                label="5"
                                color="primary"
                                variant="outlined"
                                sx={{ fontWeight: 'bold', borderWidth: 2, height: 27, marginLeft: 1, fontSize: 15 }}
                            />
                        </AccordionSummary>
                        <AccordionDetails>
                            {comments.map((comment, index) => (
                                <div
                                    key={index}
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        borderBottom: index === comments.length - 1  ? "none" : "1px solid #ddd",
                                        padding: "10px 0",
                                    }}
                                >
                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: '#666' }}>
                                        <div style={{ display: "flex", alignItems: "center" }}>
                                            <AccountCircleIcon sx={{ marginRight: 1 }} />
                                            <Typography variant="body1" style={{ fontWeight: "bold", marginRight: 8 }}>
                                                {comment.user}
                                            </Typography>
                                            <CalendarMonthIcon sx={{ marginLeft: 2, fontSize: 20 }}/>
                                            <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1 }}>
                                                {comment.date}
                                            </Typography>
                                            <IconButton size="small" color="error" sx={{ marginLeft: 2 }}>
                                                <FavoriteIcon fontSize="small" />
                                            </IconButton>
                                        </div>
                                        <IconButton onClick={(event) => handleMenuOpen(event, comment)}>
                                            <MoreVertIcon />
                                        </IconButton>
                                    </div>
                                    <Typography variant="body2" style={{ marginTop: 8, marginBottom: 8, paddingLeft: 30 }}>
                                        {comment.text}
                                    </Typography>

                                    {comment.replies.length > 0 && (
                                        <div style={{ marginLeft: 50, paddingLeft: 10 }}>
                                            {comment.replies.map((reply, replyIndex) => (
                                                <div
                                                    key={replyIndex}
                                                    style={{
                                                        display: 'flex',
                                                        flexDirection: 'column',
                                                        marginBottom: 8
                                                    }}
                                                >
                                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", color: '#666' }}>
                                                        <div style={{ display: "flex", alignItems: "center" }}>
                                                            <KeyboardArrowRightIcon sx={{ marginRight: 1 }}/>
                                                            <AccountCircleIcon sx={{ marginRight: 1 }} />
                                                            <Typography variant="body1" style={{ fontWeight: "bold", marginRight: 8 }}>
                                                                {reply.user}
                                                            </Typography>
                                                            <CalendarMonthIcon sx={{ marginLeft: 2, fontSize: 20 }}/>
                                                            <Typography variant="body2" color="textSecondary" sx={{ marginLeft: 1 }}>
                                                                {reply.date}
                                                            </Typography>
                                                            <IconButton size="small" color="error" sx={{ marginLeft: 2 }}>
                                                                <FavoriteIcon fontSize="small" />
                                                            </IconButton>
                                                        </div>
                                                        <IconButton onClick={(event) => handleMenuOpen(event, comment)}>
                                                            <MoreVertIcon />
                                                        </IconButton>
                                                    </div>
                                                    <Typography variant="body2" style={{ marginTop: 8, paddingLeft: 65 }}>
                                                        {reply.text}
                                                    </Typography>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <Box mt={3}>
                                <Editor
                                    editorState={editorState}
                                    onEditorStateChange={setEditorState}
                                    wrapperClassName="editor-wrapper"
                                    editorClassName="editor"
                                    toolbarClassName="toolbar"
                                    placeholder="댓글을 입력하세요..."
                                    editorStyle={{
                                        border: '1px solid #DDD',
                                        padding: '20px'
                                    }}
                                />
                                {/* <ReactQuill
                                    ref={quillRef}
                                    theme="snow"
                                    value={newComment}
                                    onChange={setNewComment}
                                    modules={modules}
                                    formats={formats}
                                    placeholder="댓글을 입력하세요"
                                /> */}
                                <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={handleAddComment}
                                    >
                                        댓글등록
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="inherit"
                                        onClick={handleAddComment}
                                    >
                                        초기화
                                    </Button>
                                </Box>
                            </Box>
                        </AccordionDetails>         
                    </Accordion>
                </Box>

                <Menu
                    anchorEl={menuAnchor}
                    open={Boolean(menuAnchor)}
                    onClose={handleMenuClose}
                    anchorOrigin={{ vertical: "bottom", horizontal: 'right' }}
                    transformOrigin={{ vertical: "top", horizontal: 'right' }}
                    disableScrollLock   // Menu 표시 시 스크롤 유무 발생으로 인한 영역 조정 방지
                >
                    <MenuItem onClick={handleEdit}>수정</MenuItem>
                    <MenuItem onClick={handleDelete}>삭제</MenuItem>
                </Menu>
            </div>
        </div>
    )
}

export default NoticeDetail