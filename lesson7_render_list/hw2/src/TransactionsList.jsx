import React from "react";
import moment from "moment";

const TransactionsList = ({ transactions }) => {
  return transactions.map(obj => (
    <li key={obj.id} className="transaction">
      <span className="transaction__date">
        {moment(obj.time).format("DD MMM")}
      </span>
      <span className="transaction__time">
        {moment(obj.time).format("hh mm")}
      </span>
      <span className="transaction__assets">{`${obj.from} → ${obj.to}`}</span>
      <span className="transaction__rate">{obj.rate}</span>
      <span className="transaction__amount">{obj.amount}</span>
    </li>
  ));
};

export default TransactionsList;
