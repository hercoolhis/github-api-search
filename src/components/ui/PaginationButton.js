// eslint-disable-next-line import/no-unresolved
/* eslint-disable import/no-unresolved */
import React from "react";

export default function PaginationButton({point,
  getRepos,
  query,
  text,
  icon,}) {
  const disabledStyle =
    "inline-flex items-center cursor-not-allowed disabled disabled:opacity-25 px-4 py-2 mr-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg";
  const validStyle =

    "inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white";

  return (
    <>


    
      <button
        type="button"
        disabled={!point}
        onClick={() => {
          getRepos(query, point);
        }}
        className={`${point ? validStyle : disabledStyle} mr-2`}
      >
        {icon}
        {text}
      </button>
    </>
  );
}
