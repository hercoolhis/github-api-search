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
      <div class="bg-blue-100 mt-8 px-6 py-4 my-3 w-3/4 mx-auto shadow rounded-md flex items-center">
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
        </div>
      </div>
    </>
  );
}
