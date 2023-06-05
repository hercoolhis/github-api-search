/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";

import { resolvePaginationData } from "../../utils/helpers";
import PaginationButton from "./PaginationButton";

const FrontIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className="w-5 h-5 ml-2"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >


      <path
        fillRule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

const BackIcon = () => {


  return (
    <svg

      aria-hidden="true"
      className="w-5 h-5 mr-2"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
};

export default function Pagination({ paginateInfo, getRepos, query }) {
  const [paginatePoints, setPaginatePoints] = useState();

  useEffect(() => {
    if (paginateInfo) {

      
      setPaginatePoints(resolvePaginationData(paginateInfo));
    }
  }, [paginateInfo]);

  return (
    <>
      <div className="mt-4">
        <PaginationButton
          point={paginatePoints?.first}
          getRepos={(query, point) => {
            getRepos(query, point);
          }}
          text={"First"}
          query={query}
          icon={<BackIcon />}
        />

        <PaginationButton
          point={paginatePoints?.prev}
          getRepos={(query, point) => {
            getRepos(query, point);
          }}
          text={"Previous"}
          query={query}
          icon={<BackIcon />}
        />

        <PaginationButton
          point={paginatePoints?.next}
          getRepos={(query, point) => {
            getRepos(query, point);
          }}
          text={"Next"}
          query={query}
          icon={<FrontIcon />}
        />

        <PaginationButton
          point={paginatePoints?.last}
          getRepos={(query, point) => {
            getRepos(query, point);
          }}
          text={"Last"}
          query={query}
          icon={<FrontIcon />}
        />
      </div>
    </>
  );
}
