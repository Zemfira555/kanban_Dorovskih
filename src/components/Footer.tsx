import React from "react";

const Footer: React.FC<{
  activeTasksCount: number;
  finishedTasksCount: number;
}> = ({ activeTasksCount, finishedTasksCount }) => {
  return (
    <footer className="flex sm:hidden items-center justify-between px-5 bg-[#0067A3] h-[6.5vh] text-white text-xl">
      <div className="flex gap-7">
        <div>Active tasks: {activeTasksCount}</div>
        <div>Finished tasks: {finishedTasksCount}</div>
      </div>
      <div className="flex gap-7">
        <div>Kanban board by {"<NAME>, <YEAR>"}</div>
      </div>
    </footer>
  );
};

export default Footer;
