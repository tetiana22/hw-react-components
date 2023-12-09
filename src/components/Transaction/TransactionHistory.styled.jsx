import styled from 'styled-components';

export const TransactionTable = styled.table`
  overflow: hidden;
    text-transform: capitalize;
    
    width: 100%;

    margin-left: 16px;
    margin-bottom: 20px;

    background: rgba(142, 227, 212, 0.22);
    
    border-spacing: 0;
    border-radius: 18px;
`;

export const TableHead = styled.thead`
  background-color: #00bcd5;
  text-transform: uppercase;
  color: #fff;
`;

export const TableHeaderCell = styled.th`
  padding: 10px;
`;
export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #ecf1f4;
  }
`;

export const TableCell = styled.td`
  padding: 10px;
  border: 1px solid #ccc;
`;