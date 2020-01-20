import React from "react";
import moment from "moment";

const formatNumber = (locales, number) => {
  return new Intl.NumberFormat(locales).format(number);
};

const Transaction = ({ transactions }) => {
  return transactions.map(obj => (
    <li key={obj.id} className="transaction">
      <span className="transaction__date">
        {moment(obj.time).format("DD MMM")}
      </span>
      <span className="transaction__time">
        {moment(obj.time).format("HH mm")}
      </span>
      <span className="transaction__assets">{`${obj.from} → ${obj.to}`}</span>
      <span className="transaction__rate">
        {formatNumber("en-Gb", obj.rate)}
      </span>
      <span className="transaction__amount">
        {formatNumber("en-Gb", obj.amount)}
      </span>
    </li>
  ));
};

export default Transaction;
