import React from "react";

function Spinner() {
  return (
    <div className="spin h-[100vh] w-[100vw] flex items-center justify-center bg-gradient-to-r from-indigo-500 m-3">
     <div className="flex gap-2">
    <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
    <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
    <div className="w-5 h-5 rounded-full animate-pulse bg-blue-600"></div>
</div>
    </div>
  );
}

export default Spinner;
