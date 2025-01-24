import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { ColDef } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { ClientSideRowModelModule, PaginationModule, TextFilterModule, NumberFilterModule, ValidationModule, TooltipModule } from 'ag-grid-community'
import Circle from "../../asset/img/medicine/circle.png";
import Oval from "../../asset/img/medicine/oval.png";
import SemiCircular from "../../asset/img/medicine/semicircular.png";
import Square from "../../asset/img/medicine/square.png";
import Triangle from "../../asset/img/medicine/triangle.png";
import Rhombus from "../../asset/img/medicine/rhombus.png";
import Rectangle from "../../asset/img/medicine/rectangle.png";
import Pentagon from "../../asset/img/medicine/pentagon.png";
import Hexagon from "../../asset/img/medicine/hexagon.png";
import Octagon from "../../asset/img/medicine/octagon.png";
import EtcShape from "../../asset/img/medicine/etcShape.png";
import Tablets from "../../asset/img/medicine/tablets.png";
import HardCapsule from "../../asset/img/medicine/hardCapsule.png";
import SoftCapsule from "../../asset/img/medicine/softCapsule.png";
import None from "../../asset/img/medicine/none.png";
import Minus from "../../asset/img/medicine/minus.png";
import Plus from "../../asset/img/medicine/plus.png";
import Etc from "../../asset/img/medicine/etc.png";
import SidebarMenu from '../common/SidebarMenu'
import { Box, FormControl, InputLabel, MenuItem, Select, Table, TableBody, TableCell, TableRow, TextField, Typography, Button, Divider } from '@mui/material'
import emedipiaLogo from '../../asset/partnerLogo/emedipia_logo.png'
import './style/mediInfo.css'

const MediInfo = () => {
    const rowData = [
        { id: 1, name: '이름1', age: 25, city: '서울' },
        { id: 2, name: '이름2', age: 30, city: '부산' },
        { id: 3, name: '이름3', age: 35, city: '대구' },
    ]

    const shapes = [
        { image: Circle, label: "원형" },
        { image: Oval, label: "타원형" },
        { image: SemiCircular, label: "반원형" },
        { image: Triangle, label: "삼각형" },
        { image: Square, label: "사각형" },
        { image: Rhombus, label: "마름모형" },
        { image: Rectangle, label: "장방형" },
        { image: Pentagon, label: "오각형" },
        { image: Hexagon, label: "육각형" },
        { image: Octagon, label: "팔각형" },
        { image: EtcShape, label: "기타" }
    ]
    
    const colors = [
        { color: "white", label: "하양" },
        { color: "yellow", label: "노랑" },
        { color: "orange", label: "주황" },
        { color: "pink", label: "분홍" },
        { color: "red", label: "빨강" },
        { color: "brown", label: "갈색" },
        { color: "lightgreen", label: "연두" },
        { color: "green", label: "초록" },
        { color: "turquoise", label: "청록" },
        { color: "blue", label: "파랑" },
        { color: "navy", label: "남색" },
        { color: "magenta", label: "자주" },
        { color: "purple", label: "보라" },
        { color: "grey", label: "회색" },
        { color: "black", label: "검정" },
        { color: "transparent", label: "투명" }
    ]
    
    const formulation = [
        { image: Tablets, label: "정제류" },
        { image: HardCapsule, label: "경질캡슐" },
        { image: SoftCapsule, label: "연질캡슐" }
    ]
    
    const dividing = [
        { image: None, label: "없음" },
        { image: Minus, label: "(-)형" },
        { image: Plus, label: "(+)형" },
        { image: Etc, label: "기타" }
    ]
    
    // 약품 정보 Grid Column 정의
    const [columnDefs] = useState<ColDef[]>([
        {field: 'itemName', headerName: '제품명', flex: 2, tooltipValueGetter: (params) => params.value},
        {field: 'entpName', headerName: '업체명', flex: 1.5, tooltipValueGetter: (params) => params.value},
        {field: 'itemSeq', headerName: '품목코드', flex: 1.5, tooltipValueGetter: (params) => params.value},
        {field: 'efcyQesitm', headerName: '효능', flex: 2, tooltipValueGetter: (params) => params.value},
        {field: 'useMethodQesitm', headerName: '사용법', flex: 2, tooltipValueGetter: (params) => params.value},
        {field: 'atpnQesitm', headerName: '주의사항', flex: 2, tooltipValueGetter: (params) => params.value},
        {field: 'intrcQesitm', headerName: '상호작용', flex: 2, tooltipValueGetter: (params) => params.value},
        {field: 'seQesitm', headerName: '부작용', flex: 2, tooltipValueGetter: (params) => params.value},
        {field: 'depositMethodQesitm', headerName: '보관법', flex: 2, tooltipValueGetter: (params) => params.value}
    ])

    const handleEntireCellClick = (a: any, b: any) => {

    }

    const handleCellClick = (a: any, b: any, c: any) => {

    }

    const handleBookmarkMedicineList = () => {

    }

    const handleSearchCategory = () => {

    }

    const searchByMedicineShape = () => {

    }

    const resetSearchByMedicineShape = () => {

    }

    const handleSearch = () => {

    }

    const resetSearch = () => {

    }

    return (
        <div className='mediInfo'>
            <SidebarMenu />
            <div className='mediInfo-container'>
                <div className="mediInfo-content">
                    <Box sx={{ width: '100%', marginBottom: '30px'}}>
                        <Typography sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                            약품정보
                        </Typography>
                        <Divider sx={{ marginTop: '10px' }} />
                    </Box>
                    <Box className='mediInfo-box'>
                        <Box>
                            <Table className='search-shape'>
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            className='shape-title-cell'
                                        >
                                            모양<br/>전체
                                        </TableCell>
                                        {shapes.map((shape, index) => (
                                            <TableCell
                                                className='shape-cell'
                                                key={index}
                                            >
                                                <img 
                                                    src={shape.image}
                                                    alt={shape.label}
                                                />
                                                <Typography variant="caption">{shape.label}</Typography>
                                            </TableCell>
                                        ))}
                                        {shapes.length < colors.length && (
                                            <TableCell
                                                className='shape-empty-cell'
                                                colSpan={colors.length - shapes.length}
                                            />
                                        )}
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Table className='search-color'>
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            className='color-title-cell'
                                        >
                                            색상<br/>전체
                                        </TableCell>
                                        {colors.map((color, index) => (
                                            <TableCell
                                                className='color-cell'
                                                key={index}
                                            >
                                                <div className="d-flex justify-content-center mb-1" style={{ marginTop: 5, justifyContent: 'center', display: 'flex' }}>
                                                    <div style={{ border: '0.5px solid lightgrey', borderRadius: 10, height: 12, width: 12, backgroundColor: color.color }}></div>
                                                </div>
                                                <Typography variant="caption">{color.label}</Typography>
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Table className='search-formulation'>
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            className='formulation-title-cell'
                                        >
                                            제형<br/>전체
                                        </TableCell>
                                        {formulation.map((formula, index) => (
                                            <TableCell
                                                className='formulation-cell'
                                                key={index}
                                            >
                                                <img 
                                                    src={formula.image}
                                                    alt={formula.label}
                                                />
                                                <Typography variant="caption">{formula.label}</Typography>
                                            </TableCell>
                                        ))}
                                        {formulation.length < colors.length && (
                                            <TableCell
                                                className='formulation-empty-cell'
                                                colSpan={colors.length - formulation.length}
                                            />
                                        )}
                                    </TableRow>
                                </TableBody>
                            </Table>
                            <Table className='search-dividing'>
                                <TableBody>
                                    <TableRow>
                                        <TableCell
                                            className='dividing-title-cell'
                                        >
                                            분할선<br/>전체
                                        </TableCell>
                                        {dividing.map((divide, index) => (
                                            <TableCell
                                                className='dividing-cell'
                                                key={index}
                                            >
                                                <img 
                                                    src={divide.image}
                                                    alt={divide.label}
                                                />
                                                <Typography variant="caption">{divide.label}</Typography>
                                            </TableCell>
                                        ))}
                                        {dividing.length < colors.length && (
                                            <TableCell
                                                className='dividing-empty-cell'
                                                colSpan={colors.length - dividing.length}
                                            />
                                        )}
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Box
                                sx={{
                                    marginTop: 5,
                                    width: 350,
                                    height: '100%', 
                                    backgroundColor: '#FFF',
                                    borderRadius: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: 2,
                                    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
                                }}
                            >
                                <img 
                                    src={emedipiaLogo}
                                    style={{ width: 200, height: 57, marginLeft: -30, cursor: 'pointer'}}
                                />
                            </Box>
                            <Box sx={{ flex: 1 }}>
                                <Box sx={{ marginTop: 5}}>
                                    <Box className='searchbar-first-row'>
                                        <FormControl sx={{ minWidth: '150px' }} size='small'>
                                            <InputLabel id='medi-search-select-label'>분류</InputLabel>
                                            <Select
                                                labelId='medi-search-select-label'
                                                id='medi-search-select'
                                                // value={searchCategory}
                                                label='분류'
                                                onChange={handleSearchCategory}
                                                MenuProps={{
                                                    disableScrollLock: true
                                                }}
                                            >
                                                <MenuItem value='mName'>제품명</MenuItem>
                                                <MenuItem value='mCompany'>업체명</MenuItem>
                                                <MenuItem value='mEffect'>효능</MenuItem>
                                                <MenuItem value='mCode'>품목기준코드</MenuItem>
                                            </Select>
                                        </FormControl>
                                        <Box className='searchbar-first-row-textfield'>
                                            <TextField 
                                                fullWidth
                                                size='small'
                                                placeholder='검색 키워드를 입력하세요'
                                                autoFocus
                                            />
                                        </Box>
                                        <Box className='searchbar-first-row-button-group'>
                                            <Button variant='contained' color='primary'>약 정보로 검색</Button>
                                            <Button variant='contained' color='inherit'>초기화</Button>
                                        </Box>
                                    </Box>
                                    <Box className='searchbar-second-row'>
                                        <Box className='searchbar-second-row-textfield'>
                                            <TextField 
                                                fullWidth
                                                size='small'
                                                placeholder='식별문자 (약의 앞면이나 뒷면에 표기된 문자)로 검색'
                                            />
                                        </Box>
                                        <Box className='searchbar-second-row-button-group'>
                                            <Button variant='contained' color='primary' onClick={searchByMedicineShape}>약 모양으로 검색</Button>
                                            <Button variant='contained' color='inherit' onClick={resetSearchByMedicineShape}>초기화</Button>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <div className='ag-theme-alpine' style={{ height: '100vh', minHeight: '60vh', maxHeight: '60vh' }}>
                            <AgGridReact
                                theme="legacy"
                                rowData={rowData}
                                columnDefs={columnDefs}
                                defaultColDef={{ sortable: true, filter: true }} 
                                pagination={true} 
                                paginationPageSize={10}
                                paginationPageSizeSelector={[10, 20, 50, 100]}
                                modules={[ClientSideRowModelModule, PaginationModule, TextFilterModule, NumberFilterModule, ValidationModule, TooltipModule]}
                            />
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default MediInfo