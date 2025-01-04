import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import { ColDef } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'
import { ClientSideRowModelModule, PaginationModule, TextFilterModule, NumberFilterModule, ValidationModule } from 'ag-grid-community'
import './style/mediInfo.css'

type RowData = {
    id: number;
    name: string;
    age: number;
    city: string;
};

const MediInfo: React.FC = () => {
    const rowData = [
        { id: 1, name: '이름1', age: 25, city: '서울' },
        { id: 2, name: '이름2', age: 30, city: '부산' },
        { id: 3, name: '이름3', age: 35, city: '대구' },
    ];

    const columnDefs: ColDef<RowData>[] = [
        { field: 'id', headerName: 'ID', sortable: true, filter: true },
        { field: 'name', headerName: '이름', sortable: true, filter: true },
        { field: 'age', headerName: '나이', sortable: true, filter: true },
        { field: 'city', headerName: '도시', sortable: true, filter: true },
    ];
    

    return (
        <div className='mediInfo-container'>
            <div className='ag-theme-alpine' style={{ height: '100vh', minHeight: '60vh', maxHeight: '60vh' }}>
                <AgGridReact
                    theme="legacy"
                    rowData={rowData}
                    columnDefs={columnDefs}
                    defaultColDef={{ sortable: true, filter: true }} 
                    pagination={true} 
                    paginationPageSize={10}
                    paginationPageSizeSelector={[10, 20, 50, 100]}
                    modules={[ClientSideRowModelModule, PaginationModule, TextFilterModule, NumberFilterModule, ValidationModule]}
                />
            </div>
        </div>
    )
}

export default MediInfo