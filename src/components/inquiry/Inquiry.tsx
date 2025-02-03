import { Box, Button, Chip, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material"
import SidebarMenu from "../common/SidebarMenu"
import CreateIcon from '@mui/icons-material/Create';
import './style/inquiry.css'

const Inquiry = () => {
    const rowData = [
        { seq: 5, category: "제품관련문의", title: "전달이 안된거 같습니다", writer: "김은지", date: "20-05-04", status: "complete" },
        { seq: 4, category: "배송문의", title: "물이 덜왔어요~", writer: "김은지", date: "20-05-04", status: "complete" },
        { seq: 3, category: "제품관련문의", title: "배너 시안 메일로 받을 수 있을까요?", writer: "김은지", date: "20-04-23", status: "waiting" },
        { seq: 2, category: "서류관련문의", title: "학교 제출서류", writer: "김은지", date: "20-04-23", status: "complete" },
        { seq: 1, category: "제품관련문의", title: "배너 제작 🖼️", writer: "김은지", date: "20-04-20", status: "waiting" },
    ];

    return (
        <div className="inquiry">
            <SidebarMenu />
            <div className="inquiry-container">
                <Box sx={{ width: '100%', marginBottom: '30px' }}>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                        1:1 문의
                    </Typography>
                    <Divider sx={{ marginTop: '10px' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box>
                        <Button variant="contained" color="primary" sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <CreateIcon sx={{ fontSize: 17 }} />
                            <Typography>문의 작성</Typography>
                        </Button>
                    </Box>
                    <Box sx={{ display: 'flex', marginBottom: '20px' }}>
                        <Box >
                            <TextField
                                fullWidth
                                size="small"
                                placeholder="검색어를 입력하세요"
                                autoFocus
                            />
                        </Box>
                        <Box sx={{ display: 'flex', marginLeft: '20px', gap: '5px' }}>
                            <Button variant="contained" color="primary">검색</Button>
                            <Button variant="contained" color="inherit">초기화</Button>
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <TableContainer component={Paper} sx={{ border: '1px solid #E2E2E2'}}>
                        <Table>
                            <TableHead sx={{ borderBottom: '2px solid #E2E2E2'}}>
                                <TableRow>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", backgroundColor: "#F9F9F9" }}>
                                    번호
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", backgroundColor: "#F9F9F9" }}>
                                    제목
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", backgroundColor: "#F9F9F9" }}>
                                    작성자
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", backgroundColor: "#F9F9F9" }}>
                                    등록일
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", backgroundColor: "#F9F9F9" }}>
                                    상태
                                </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowData.length > 0 ? (
                                    rowData.map((row) => (
                                        <TableRow 
                                            key={row.seq} 
                                            sx={{
                                                "&:last-child td, &:last-child th": { border: 0 },
                                                cursor: 'pointer'
                                            }}
                                            hover
                                        >
                                            <TableCell sx={{ textAlign: "center" }}>{row.seq}</TableCell>
                                            <TableCell sx={{ }}>
                                                <Typography
                                                    sx={{
                                                    display: "inline-block",
                                                    backgroundColor: "#e0f7fa",
                                                    borderRadius: "4px",
                                                    padding: "2px 6px",
                                                    marginRight: "8px",
                                                    fontSize: "12px",
                                                    }}
                                                >
                                                    {row.category}
                                                </Typography>
                                                {row.title}
                                            </TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>{row.writer}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>{row.date}</TableCell>
                                            <TableCell sx={{ textAlign: "center" }}>
                                                {row.status === "complete" ? (
                                                    <Chip 
                                                        label="답변완료"
                                                        color="primary"
                                                    />
                                                ) : (
                                                    <Chip 
                                                        label="답변대기"
                                                    />
                                                )}
                                            </TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={5} align="center" sx={{ padding: '20px', fontSize: '16px', color: '#888' }}>
                                            작성된 문의사항이 없습니다
                                        </TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </div>
        </div>
    )
}

export default Inquiry