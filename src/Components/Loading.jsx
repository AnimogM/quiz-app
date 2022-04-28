import React from "react";

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="animate-pulse">
        {" "}
        <div class="w-20 h-20 bg-blue-400 rounded-full"></div>
      </div>
    </div>
  );
};

export default Loading;
