import { Box, Button, Divider, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import SidebarMenu from "../common/SidebarMenu"
import './style/inquiry.css'

const Inquiry = () => {
    const rowData = [
        { seq: 5, category: "제품관련문의", title: "전달이 안된거 같습니다", writer: "김은지", date: "20-05-04", status: "답변완료" },
        { seq: 4, category: "배송문의", title: "물이 덜왔어요~", writer: "김은지", date: "20-05-04", status: "답변완료" },
        { seq: 3, category: "제품관련문의", title: "배너 시안 메일로 받을 수 있을까요?", writer: "김은지", date: "20-04-23", status: "답변완료" },
        { seq: 2, category: "서류관련문의", title: "학교 제출서류", writer: "김은지", date: "20-04-23", status: "답변완료" },
        { seq: 1, category: "제품관련문의", title: "배너 제작 🖼️", writer: "김은지", date: "20-04-20", status: "답변대기" },
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
                <Box>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", backgroundColor: "#f5f5f5" }}>
                                    번호
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", backgroundColor: "#f5f5f5" }}>
                                    제목
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", backgroundColor: "#f5f5f5" }}>
                                    글쓴이
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", backgroundColor: "#f5f5f5" }}>
                                    등록일
                                </TableCell>
                                <TableCell sx={{ fontWeight: "bold", textAlign: "center", backgroundColor: "#f5f5f5" }}>
                                    상태
                                </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowData.map((row) => (
                                <TableRow key={row.seq} sx={{ borderBottom: "1px solid #e0e0e0" }}>
                                    <TableCell sx={{ textAlign: "center", border: 0 }}>{row.seq}</TableCell>
                                    <TableCell sx={{ border: 0 }}>
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
                                    <TableCell sx={{ textAlign: "center", border: 0 }}>{row.writer}</TableCell>
                                    <TableCell sx={{ textAlign: "center", border: 0 }}>{row.date}</TableCell>
                                    <TableCell sx={{ textAlign: "center", border: 0 }}>
                                    {row.status === "답변완료" ? (
                                        <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#ffc107",
                                            color: "#fff",
                                            fontSize: "12px",
                                            padding: "4px 8px",
                                            borderRadius: "12px",
                                        }}
                                        disabled
                                        >
                                        {row.status}
                                        </Button>
                                    ) : (
                                        <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: "#1976d2",
                                            color: "#fff",
                                            fontSize: "12px",
                                            padding: "4px 8px",
                                            borderRadius: "12px",
                                        }}
                                        disabled
                                        >
                                        {row.status}
                                        </Button>
                                    )}
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </div>
        </div>
    )
}

export default Inquiry