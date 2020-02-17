import React, { useState, useEffect } from "react";

const ConnectionStatus = () => {
  const [connection, setConnection] = useState(true);

  useEffect(() => {
    const statusToggle = () => {
      setConnection(!connection);
    };

    window.addEventListener("offline", statusToggle);
    window.addEventListener("online", statusToggle);

    return () => {
      window.removeEventListener("offline", statusToggle);
      window.removeEventListener("online", statusToggle);
    };
  }, [connection]);

  return (
    <div className={connection ? "status" : "status__offline"}>
      {connection ? "online" : "offline"}
    </div>
  );
};

export default ConnectionStatus;
