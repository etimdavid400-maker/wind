import React from "react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const tabs = ["messages", "blog", "registration"];

  return (
    <div
      className="
        bg-green-700 text-white
        w-full md:w-64
        flex md:flex-col flex-row
        justify-around md:justify-start
        items-center
        py-4 md:py-10
        fixed md:static
        top-0 left-0
        z-20
        shadow-md
      "
    >
      <h2 className="text-xl md:text-2xl font-bold md:mb-6">
        Admin Panel
      </h2>

      <ul className="flex md:flex-col gap-3 md:gap-4">
        {tabs.map((tab) => (
          <li
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              cursor-pointer px-3 py-2 rounded-md capitalize text-sm md:text-base
              ${
                activeTab === tab
                  ? "bg-green-900"
                  : "hover:bg-green-600 transition"
              }
            `}
          >
            {tab}
          </li>
        ))}
      </ul>
    </div>
  );
}
