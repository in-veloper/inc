import React, { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'
import { ColDef } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { ClientSideRowModelModule, PaginationModule, TextFilterModule, NumberFilterModule, ValidationModule, TooltipModule } from 'ag-grid-community'
import { Input, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, CardImg, Table, Popover, PopoverBody, PopoverHeader } from "reactstrap";
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
import './style/mediInfo.css'

const MediInfo: React.FC = () => {
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
        <div className='mediInfo-container'>
            <div className="content" style={{ display: 'flex', flexDirection: 'column' }}>

                <Row style={{ flex: '1 1 auto' }}>
                    <Col md="7">
                        <Table bordered className="text-center search-shape mb-1" style={{ width: 'auto' }}>
                            <tbody>
                                <tr>
                                <td className="align-items-center justify-content-center fixed-width-cell selected-cell" onClick={(e) => handleEntireCellClick(e, 'shape')}>
                                    <span style={{ fontSize: 12 }}>모양<br/>전체</span>
                                </td>
                                {shapes.map((shape, index) => (
                                    <td key={index} onClick={(e) => handleCellClick(e, 'shape', shape.label)}>
                                    <img src={shape.image} alt={shape.label} />
                                    <span>{shape.label}</span>
                                    </td>
                                ))}
                                </tr>
                            </tbody>
                        </Table>
                        <Table bordered className="text-center search-color mb-1" style={{ width: 'auto' }}>
                            <tbody>
                                <tr>
                                <td className="align-items-center justify-content-center fixed-width-cell selected-cell"  onClick={(e) => handleEntireCellClick(e, 'color')}>
                                    <span style={{ fontSize: 12 }}>색상<br/>전체</span>
                                </td>
                                {colors.map((color, index) => (
                                    <td className="text-center" key={index} onClick={(e) => handleCellClick(e, 'color', color.label)}>
                                    <div className="d-flex justify-content-center mb-1" style={{ marginTop: -5 }}>
                                        <div style={{ border: '0.5px solid lightgrey', borderRadius: 10, height: 12, width: 12, backgroundColor: color.color }}></div>
                                    </div>
                                    <div style={{ marginBottom: -9 }}>
                                        <span>{color.label}</span>
                                    </div>
                                    </td>
                                ))}
                                </tr>
                            </tbody>
                        </Table>
                        <Row className="d-flex no-gutters">
                            <Table bordered className="text-center search-formulation" style={{ width: 'auto', }}>
                                <tbody>
                                    <tr>
                                        <td className="align-items-center justify-content-center fixed-width-cell selected-cell" onClick={(e) => handleEntireCellClick(e, 'formulation')}>
                                        <span style={{ fontSize: 12 }}>제형<br/>전체</span>
                                        </td>
                                        {formulation.map((formulation, index) => (
                                        <td key={index} onClick={(e) => handleCellClick(e, 'formulation', formulation.label)}>
                                            <img src={formulation.image} alt={formulation.label} />
                                            <span>{formulation.label}</span>
                                        </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </Table>
                            <Table bordered className="text-center search-dividing ml-5" style={{ width: 'auto' }}>
                                <tbody>
                                    <tr>
                                        <td className="align-items-center justify-content-center fixed-width-cell selected-cell" onClick={(e) => handleEntireCellClick(e, 'dividing')}>
                                            <span style={{ fontSize: 12 }}>분할선<br/>전체</span>
                                        </td>
                                        {dividing.map((dividing, index) => (
                                        <td key={index} onClick={(e) => handleCellClick(e, 'dividing', dividing.label)}>
                                            <img src={dividing.image} alt={dividing.label} />
                                            <span>{dividing.label}</span>
                                        </td>
                                        ))}
                                    </tr>
                                </tbody>
                            </Table>
                        </Row>
                    </Col>
                    <Col md="5">
                        <Row className="justify-content-end no-gutters mt-3">
                            <Input
                                className="ml-3 mr-2"
                                id="searchCategory"
                                name="select"
                                type="select"
                                style={{ width: '120px'}}
                                onChange={handleSearchCategory}
                                // value={searchCategory}
                            >
                                <option value='mName'>제품명</option>
                                <option value='mCompany'>업체명</option>
                                <option value='mEffect'>효능</option>
                                <option value='mCode'>품목기준코드</option>
                            </Input>
                            <Input
                                type="search"
                                // value={searchText}
                                placeholder="검색 키워드를 입력하세요"
                                // onKeyDown={handleKeyDown}
                                autoFocus={true}
                                style={{ width: '39.2%', height: '40px'}}
                                // onChange={handleSearchText}
                            />
                            <Button className="ml-2" style={{ height: '38px', marginTop: 1 }} onClick={handleSearch}>약 정보로 검색</Button>
                            <Button className="ml-1" style={{ height: '38px', marginTop: 1 }} onClick={resetSearch}>초기화</Button>
                        </Row>
                        <Row className="d-flex align-items-center justify-content-end no-gutters" style={{ marginTop: -7}}>
                            <Input 
                                type="text"
                                placeholder="식별문자 (약의 앞면이나 뒷면에 표기된 문자)로 검색"
                                style={{ width: '60.8%', height: '40px' }}
                                // value={discriminationText}
                                // onChange={handleDiscriminationText}
                                // onKeyDown={handleSearchShapeKeyDown}
                            />
                            <Button className="ml-2" onClick={searchByMedicineShape}>약 모양으로 검색</Button>
                            <Button className="ml-1" style={{ height: '38px' }} onClick={resetSearchByMedicineShape}>초기화</Button>
                        </Row>
                    </Col>
                </Row>
                <Row style={{ flex: '1 1 auto' }}>
                    <Col md="12">
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
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default MediInfo