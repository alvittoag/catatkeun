import { TfiMenuAlt } from "react-icons/tfi";

export const Navbar = ({ handleToggleSidebar }) => {
  return (
    <div className="FEFEFF py-5 px-4 md:px-8 flex items-center gap-4">
      <div
        onClick={handleToggleSidebar}
        className="ring-1 ring-gray-200 rounded-sm  md:w-[42px] hover:bg-[#2A6DB0] hover:text-white md:px-3 md:py-2 px-2 py-2"
      >
        <TfiMenuAlt size={18} />
      </div>
      <div>
        <h1 className="text-lg md:text-2xl font-bold -mt-1">Catatkeun</h1>
      </div>
    </div>
  );
};
