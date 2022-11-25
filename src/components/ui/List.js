/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import SingleRepo from "./SingleRepo";

export default function RepoList({ header, repos, onClose }) {
  return (
    <>
      <div class="w-full mt-10  p-4 bg-white border rounded-lg shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <div class="flex items-center justify-between mb-4">
          <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">
            {header}
          </h5>
          <a
            onClick={() => { onClose() }}
            href="#"
            class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          >
            Close
          </a>
        </div>
        <div class="flow-root">
          <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
            {repos.map((eachRepo, index) => (
              <SingleRepo repo={eachRepo} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
