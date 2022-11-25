/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";

import Tabs from "../components/ui/Tab";
import Contributors from "../components/contributors/index";

export default function Home(props) {
  const [activeTab, setActiveTab] = useState(0);

  const setActiveTabId = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <>
      <section className="bg-gray-100 text-gray-600 h-screen px-4">
        <div class="bg-white px-6 py-4 my-3 w-3/4 mx-auto shadow rounded-md flex items-center">
          <div class=" w-3/4 ">
            <Tabs
              tabsInfo={[
                {
                  icon: "./svg/keyword-search.svg",
                  title: "Search repo by keyword",
                  isActive: true,
                },
                
              ]}
              clickHandler={setActiveTabId}
              activeTab={activeTab}
            ></Tabs>

            {activeTab === 0 && <Contributors />}

            {activeTab === 1 && <div>Tab 2</div>}
            {/* <div class="border-b border-gray-200 dark:border-gray-700">
              <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                <li class="mr-2">
                  <a
                    href="#"
                    class="inline-flex p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 group"
                    aria-current="page"
                  >
                    <svg
                      aria-hidden="true"
                      class="mr-2 w-5 h-5 text-gray-400 group-hover:text-gray-500 dark:text-gray-500 dark:group-hover:text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    Search repo contributors
                  </a>
                </li>
                <li class="mr-2">
                  <a
                    href="#"
                    class="inline-flex p-4 text-blue-600 rounded-t-lg border-b-2 border-blue-600 active dark:text-blue-500 dark:border-blue-500 group"
                    aria-current="page"
                  >
                    <svg
                      aria-hidden="true"
                      class="mr-2 w-5 h-5 text-blue-600 dark:text-blue-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    Search repo by keyword
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>

        {/* <div className="flex flex-col mt-20 h-full">
          <div className="w-full max-w-5xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-5 py-4 border-b border-gray-100">
              <div className="font-semibold text-gray-800">My Products</div>
            </header>

            <div className="overflow-x-auto p-3">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2">
                      <div className="font-semibold text-left">
                        Product Name
                      </div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">Quantity</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-left">Price</div>
                    </th>
                    <th className="p-2">
                      <div className="font-semibold text-center">Action</div>
                    </th>
                  </tr>
                </thead>

                <tbody className="text-sm divide-y divide-gray-100">
                  {
                    // products.map((each, index) => (
                    //     <SingleProduct setUserDeposit={(deposit) => { setUserDeposit(deposit) }} each={each} key={index}/>
                    // ))
                  }
                </tbody>
              </table>
            </div>
            <div className="flex justify-end">
              <input
                type="hidden"
                className="border border-black bg-gray-50"
                x-model="selected"
              />
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
}
