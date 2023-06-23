// eslint-disable-next-line import/no-unresolved
/* eslint-disable import/no-unresolved */
import React from "react";

export default function Tabs({tabsInfo, clickHandler, activeTab}) {
  const activeState = {
    tab: "text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group",
    icon: "text-blue-600 dark:text-blue-500",
  };

  const inactiveState = {
    tab: "border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group",
    icon: "text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300",
  };

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700"><ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">

        {tabsInfo.map((eachTab, index) => (

          <li key={index} className="mr-2">
            <a
              href="#"
              onClick={() => {
                clickHandler(index);
              }}
              className={`inline-flex p-4 rounded-t-lg ${
                activeTab === index ? activeState.tab : inactiveState.tab
              } `}
            >

              <img
                style={{
                  filter: activeTab !== index ? "grayscale(100%)" : "",
                }}
                className={`mr-2 w-5 h-5`}
                src={eachTab?.icon}
                alt="icon"
              />

              {eachTab.title}
            </a>
          </li>
        ))}
      </ul>
      </div>
    </>
  );
}
