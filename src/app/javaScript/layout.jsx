import React from "react";

const topicList = [
  {
    link: "#",
    tittle: "Introduction",
  },
  {
    link: "#",
    tittle: "What is the JavaScript?",
  },
];


const Layout = ({ children }) => {
  console.log(topicList[0])
  return (
    <div className="w-full flex">
      <div className=" border-r border-gray-50/20 p-5 w-[15%] h-screen">
        <nav>
          <ul>
            {topicList.map((item, idx) => {
              <link className="text-white" href={item.link} key={idx}>
                {item.tittle}
              </link>;
            })}
          </ul>
        </nav>
      </div>
      <div className="p-4 md:p-16">{children}</div>
    </div>
  );
};

export default Layout;
