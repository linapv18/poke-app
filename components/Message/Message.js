import React from "react";

const Message = ({ children }) => {
  return (
    <div className="mx-auto my-32 text-3xl text-center max-w-xl">
      {children}
    </div>
  );
};

export default Message;
