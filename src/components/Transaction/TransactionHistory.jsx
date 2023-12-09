import {
    TransactionTable,
    TableHead,
    TableHeaderCell,
    TableRow,
    TableCell,
  } from './TransactionHistory.styled';
  
  export const TransactionHistory = ({ items }) => {
    return (
      <TransactionTable>
        <TableHead>
          <tr>
            <TableHeaderCell>Type</TableHeaderCell>
            <TableHeaderCell>Amount</TableHeaderCell>
            <TableHeaderCell>Currency</TableHeaderCell>
          </tr>
        </TableHead>
  
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <TableRow key={id}>
              <TableCell>{type}</TableCell>
              <TableCell>{amount}</TableCell>
              <TableCell>{currency}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </TransactionTable>
    );
  };
  