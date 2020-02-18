import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [connection, setConnection] = useState(true);

  useEffect(() => {
    // const statusToggle = () => {
    //   setConnection(!connection);
    // };

    const handleOnline = () => {
      setConnection(true);
    };

    const handleOffline = () => {
      setConnection(false);
    };
    console.log("subscribe");
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      console.log("unsubscribe");
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return (
    <div className={connection ? "status" : "status__offline"}>
      {connection ? "online" : "offline"}
    </div>
  );
};

export default ConnectionStatus;
