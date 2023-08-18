import {Transaction, TransactionList, TransactionItem } from './TransactionHistory.styled'
export const TransactionHistory = ({ items}) => {
    return (
        <table className="transaction-history">
  <thead>
    <tr>
      <Transaction>Type</Transaction>
      <Transaction>Amount</Transaction>
      <Transaction>Currency</Transaction>
    </tr>
  </thead>
  <tbody>
  {items.map((item)=>(

    <TransactionItem key={item.id}>
      <TransactionList>{item.type}</TransactionList>
      <TransactionList>{item.amount}</TransactionList>
      <TransactionList>{item.currency}</TransactionList>
    </TransactionItem>
  ))}
  </tbody>
    </table>
    );
};