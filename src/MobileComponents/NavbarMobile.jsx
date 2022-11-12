import { useState } from "react";
import { TfiLayoutListThumb } from "react-icons/tfi";
import { TbLayoutCards } from "react-icons/tb";

const NavbarMobile = () => {
  const [ui, setUi] = useState(false);
  const HandleUi = () => {
    setUi(!ui);
  };
  return (
    <div className="bg-gradient-to-r from-[#2C0285] to-[#487BFF] text-white h-[165px]">
      {/* Judul dan Profile */}
      <div>
        <div className="flex justify-between mt-[10px] py-3 px-3">
          <h1 className="font-bold text-lg">Catatkeun</h1>
          <div className="flex gap-1 items-center -mt-1">
            <p className="font-medium text-sm">Hi,Icikiwir</p>
            <img
              className="rounded-full"
              width={36}
              src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-File.png"
              alt="profile"
            />
          </div>
        </div>
      </div>
      {/* Search */}
      <div className="px-3 mt-[13px]">
        <div class="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            className="p-4 pl-10 w-full text-sm text-gray-900 rounded-3xl"
            placeholder="Search your note ..."
            required
          />
          <div onClick={HandleUi}>
            {ui ? (
              <TbLayoutCards
                size={28}
                className="absolute right-4 bottom-3 text-slate-600"
              />
            ) : (
              <TfiLayoutListThumb
                size={28}
                className="absolute right-4 bottom-3 text-slate-600"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
