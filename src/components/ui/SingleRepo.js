/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function SingleRepo({ repo }) {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <li className="py-3 sm:py-4">

        <div
          onClick={() => openInNewTab(repo.html_url)}


          className="flex items-center space-x-4 hover:bg-gray-600 rounded-2xl p-2 cursor-pointer"
        >
          <div className="flex-shrink-0">


            <img
              className="w-8 h-8 rounded-full"
              src={repo.owner.avatar_url}
              alt="repo owner image"
            />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {repo.name}
            </p>
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {repo.full_name}
            </p>
            <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
              {repo.description}
            </p>
            <a
              href={repo.html_url}
              target={"_blank"}
              rel="noreferrer"
              className="text-sm text-gray-500 truncate dark:text-gray-400"
            >
              {repo.html_url}
              
            </a>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {repo.private ? 
            "Private" : "Public"}
          </div>
        </div>
      </li>
    </>
  );
}
