import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, name, quantity, amount) {
  return { id, name, quantity, amount };
}

const rows = [
  createData(0, 'Elvis Presley', '250', 312.44),
  createData(1, 'Paul McCartney', '250', 866.99),
  createData(2, 'Tom Scholz', '250', 100.81),
  createData(3, 'Michael Jackson', '250', 654.39),
  createData(4, '250', 'Long Branch, NJ', 212.79),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Products() {
  return (
    <React.Fragment>
      <Title>In-Stock Products</Title>
      <Table size='small'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Current Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.quantity}</TableCell>
              <TableCell>{row.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color='primary' href='#' onClick={preventDefault} sx={{ mt: 3 }}>
        See more orders
      </Link>
    </React.Fragment>
  );
}
