import { Box, Button, Divider, Pagination, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField, Typography } from "@mui/material"
import SidebarMenu from "../common/SidebarMenu"
import { useState } from "react"
import './style/notice.css'

const Notice = () => {
    const [page, setPage] = useState(1);                // 현재 페이지
    const rowsPerPage = 5;

    // 페이지 변경 핸들러
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    }

    const rowData = [
        { id: 1, seq: "1", title: "공지사항 제목1", writer: "작성자1", registDate: "2023-01-01", views: 100 },
        { id: 2, seq: "2", title: "공지사항 제목2", writer: "작성자2", registDate: "2023-01-02", views: 200 },
        { id: 3, seq: "3", title: "공지사항 제목3", writer: "작성자3", registDate: "2023-01-03", views: 300 },
        { id: 4, seq: "4", title: "공지사항 제목4", writer: "작성자4", registDate: "2023-01-04", views: 400 },
        { id: 5, seq: "5", title: "공지사항 제목5", writer: "작성자5", registDate: "2023-01-05", views: 500 },
    ];

    return (
        <div className="notice">
            <SidebarMenu />
            <div className="notice-container">
                <Box sx={{ width: '100%', marginBottom: '30px' }}>
                    <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                        공지사항
                    </Typography>
                    <Divider sx={{ marginTop: '10px' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
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
                <Box>
                    <TableContainer component={Paper} sx={{ border: '1px solid #E2E2E2' }}>
                        <Table>
                            <TableHead sx={{ borderBottom: '2px solid #E2E2E2'}}>
                                <TableRow>
                                    <TableCell align="center" sx={{ fontWeight: "bold", backgroundColor: "#F9F9F9", width: '10%' }}>번호</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: "bold", backgroundColor: "#F9F9F9", width: '45%' }}>제목</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: "bold", backgroundColor: "#F9F9F9", width: '15%' }}>작성자</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: "bold", backgroundColor: "#F9F9F9", width: '20%' }}>작성일</TableCell>
                                    <TableCell align="center" sx={{ fontWeight: "bold", backgroundColor: "#F9F9F9", width: '10%' }}>조회</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowData.slice((page - 1) * rowsPerPage, page * rowsPerPage).map((row) => (
                                    <TableRow 
                                        key={row.id}
                                        sx={{
                                            "&:last-child td, &:last-child th": { border: 0 },
                                            cursor: 'pointer'
                                        }}
                                        hover
                                    >
                                        <TableCell align="center">{row.seq}</TableCell>
                                        <TableCell align="left">{row.title}</TableCell>
                                        <TableCell align="center">{row.writer}</TableCell>
                                        <TableCell align="center">{row.registDate}</TableCell>
                                        <TableCell align="center">{row.views}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
                        <Pagination
                            count={Math.ceil(rowData.length / rowsPerPage)} // 총 페이지 수
                            page={page} // 현재 페이지
                            onChange={handlePageChange} // 페이지 변경 핸들러
                            color="primary" // 페이지네이션 색상
                            showFirstButton // << 버튼
                            showLastButton // >> 버튼
                        />
                    </Box>
                </Box>
            </div>
        </div>
    )
}

export default Notice