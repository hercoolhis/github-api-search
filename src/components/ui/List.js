/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

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
            {repos.map((eachRepo) => (
              <li class="py-3 sm:py-4">
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      class="w-8 h-8 rounded-full"
                      src={eachRepo.owner.avatar_url}
                      alt="Neil image"
                    />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {eachRepo.full_name}
                    </p>
                    <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                      {eachRepo.html_url}
                    </p>
                  </div>
                  {/* <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    $320
                  </div> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
