import React from "react";

const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-green-500">
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre className="px-2 py-1 font-normal text-xs text-red-500">
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };
  return (
    <>
      <div className="flex flex-col items-center mb-2">
        <h1 className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700 ml-4 text-left">
          Output
        </h1>
        <div className="w-[100%] h-56 bg-[#1B2B34] rounded-md text-white font-normal text-sm overflow-y-auto ml-auto">
          {outputDetails ? <>{getOutput()}</> : null}
        </div>
      </div>
    </>
  );
  
  
};

export default OutputWindow;
