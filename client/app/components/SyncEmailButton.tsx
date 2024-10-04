import React from "react";

const SyncEmailButton = () => {
  return (
    <div className="w-full">
      <button className="w-full justify-center font-light py-4 flex items-center space-x-3 bg-[#2B272D] text-white rounded-md mb-4">
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.5 20C3.95 20 3.47933 19.8043 3.088 19.413C2.69667 19.0217 2.50067 18.5507 2.5 18V6C2.5 5.45 2.696 4.97933 3.088 4.588C3.48 4.19667 3.95067 4.00067 4.5 4H20.5C21.05 4 21.521 4.196 21.913 4.588C22.305 4.98 22.5007 5.45067 22.5 6V18C22.5 18.55 22.3043 19.021 21.913 19.413C21.5217 19.805 21.0507 20.0007 20.5 20H4.5ZM12.5 13L4.5 8V18H20.5V8L12.5 13ZM12.5 11L20.5 6H4.5L12.5 11ZM4.5 8V6V18V8Z"
            fill="white"
          />
        </svg>
        <span>Sync Email</span>
      </button>
    </div>
  );
};

export default SyncEmailButton;
