/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";

export default function SingleRepo({ repo }) {
  return (
    <>
      <li class="py-3 sm:py-4">
        <div class="flex items-center space-x-4">
          <div class="flex-shrink-0">
            <img
              class="w-8 h-8 rounded-full"
              src={repo.owner.avatar_url}
              alt="repo owner image"
            />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
              {repo.name}
            </p>
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
              {repo.full_name}
            </p>
            <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
              {repo.description}
            </p>
            <a
              href={repo.html_url}
              target={"_blank"}
              rel="noreferrer"
              class="text-sm text-gray-500 truncate dark:text-gray-400"
            >
              {repo.html_url}
            </a>
          </div>
          <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {repo.private ? "Private" : "Public"}
          </div>
        </div>
      </li>
    </>
  );
}
