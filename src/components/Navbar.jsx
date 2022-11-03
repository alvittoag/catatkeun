import { TfiMenuAlt } from "react-icons/tfi";
import { RiMenuFoldLine } from "react-icons/ri";

export const Navbar = ({ handleToggleSidebar, toggleSidebar }) => {
  return (
    <div className="FEFEFF py-5 px-8 flex items-center gap-4">
      <div
        onClick={handleToggleSidebar}
        className="ring-1 ring-gray-200 rounded-sm w-[42px] hover:bg-[#2A6DB0] hover:text-white px-3 py-2"
      >
        {toggleSidebar ? (
          <TfiMenuAlt size={18} />
        ) : (
          <RiMenuFoldLine size={18} />
        )}
      </div>
      <div className="flex w-full justify-between">
        <div>
          <h1 className="text-2xl font-bold -mt-1">Catatkeun</h1>
        </div>
        <div className="gap-7 flex">
          <h1>Nama...</h1>
          <h1>Foto...</h1>
        </div>
      </div>
    </div>
  );
};
