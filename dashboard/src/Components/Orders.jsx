import * as React from 'react';
import Link from '@mui/material/Link';
import { DataGrid } from '@mui/x-data-grid';
import Title from './Title';

// Generate Order Data
const columns = [
  {
    field: 'date',
    headerName: 'Order Date',
    width: 90,
  },
  {
    field: 'sku',
    headerName: 'ID',
    width: 70,
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
  },
  { field: 'productName', headerName: 'Products Name', width: 130 },
  {
    field: 'status',
    headerName: 'Status',
    width: 90,
  },
];

const rows = [
  {
    id: 1,
    productName: 'Snow',
    date: '20 Mar, 2019',
    sku: 'ABC123',
    status: 'Pending',
  },
  {
    id: 2,
    productName: 'Lannister',
    date: '16 Mar, 2019',
    sku: 'ABCD123',
    status: 'Processing',
  },
  {
    id: 3,
    productName: 'Lannister',
    date: '18 Mar, 2019',
    sku: 'ABCs123',
    status: 'Shipped',
  },
  {
    id: 4,
    productName: 'Stark',
    date: '14 Mar, 2019',
    sku: 'ABCf123',
    status: 'Cancelled',
  },
  {
    id: 5,
    productName: 'Targaryen',
    date: '06 Mar, 2019',
    sku: 'ABC1253',
    status: 'Refunded',
  },
  {
    id: 6,
    productName: 'Melisandre',
    date: '16 Apr, 2019',
    sku: 'ABC1823',
    status: 'Processing',
  },
  {
    id: 7,
    productName: 'Clifford',
    date: '26 May, 2019',
    sku: 'ABC6123',
    status: 'Pending',
  },
  {
    id: 8,
    productName: 'Frances',
    date: '12 Mar, 2019',
    sku: 'ABC7123',
    status: 'Shipped',
  },
  {
    id: 9,
    productName: 'Roxie',
    date: '11 Mar, 2019',
    sku: 'ABC1253',
    status: 'Pending',
  },
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <Link color='primary' href='#' onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
