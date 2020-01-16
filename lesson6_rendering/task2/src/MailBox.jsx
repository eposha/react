import React, { Component } from "react";

const MailBox = ({ unreadMessages }) => {
  return (
    <div className="mailbox">
      <span className="mailbox__text">Messages</span>
      {unreadMessages.length > 0 && (
        <span className="mailbox__count">{unreadMessages.length}</span>
      )}
    </div>
  );
};

export default MailBox;
