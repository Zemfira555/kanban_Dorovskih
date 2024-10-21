import React from "react";

const Header: React.FC = () => {
  const [openedMenu, setOpenedMenu] = React.useState<boolean>(false);

  return (
    <header className="bg-[#0067A3] h-[8vh] flex items-center px-5 text-white justify-between">
      <div className="text-4xl sm:hidden">Awesome kanban board</div>
      <div
        onClick={() => setOpenedMenu(!openedMenu)}
        className="flex items-center gap-3 cursor-pointer sm:ml-auto"
      >
        <img
          alt="User's avatar"
          className="bg-white rounded-full"
          src={"/icon/user-avatar.svg"}
        />
        <img
          alt="Arrow bottom"
          src={openedMenu ? "/icon/arrow-top.svg" : "/icon/arrow-bottom.svg"}
        />
      </div>
      {openedMenu && (
        <div className="absolute top-16 right-3 bg-white rounded shadow-lg w-[120px] z-[9999999]">
          <div className="flex flex-col gap-2 p-1">
            <div onClick={() => setOpenedMenu(!openedMenu)} className="text-black hover:bg-gray-200 transition-all pl-1 rounded-lg">
              Profile
            </div>
            <div onClick={() => setOpenedMenu(!openedMenu)} className="text-black hover:bg-gray-200 transition-all pl-1 rounded-lg">
              Logout
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
