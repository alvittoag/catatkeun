import { AiFillHome, AiFillSchedule } from "react-icons/ai";
import { RiTodoFill } from "react-icons/ri";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { MdGroup } from "react-icons/md";
import { Link } from "react-router-dom";

export const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="mt-1 w-full p-4">
      <h1 className="flex text-xs font-medium py-1 text-[#2A6DB0] justify-center">MENU</h1>
      <div className="flex py-2 flex-col gap-3">
        {/* Menu 1 */}
        <Link to={"/"}>
          <div className="flex items-center py-2 gap-4 group hover:bg-gray-300 rounded-xl px-3 w-full hover:cursor-pointer transition duration-500 ease-in-out">
            <div className="bg-[#EAEEF5] hover:bg-white px-2 py-1">
              <AiFillHome size={17} />
            </div>
            {toggleSidebar ? null : <p>Home</p>}
          </div>
        </Link>

        {/* Menu 2 */}
        <Link to={"/todolist"}>
          <div className="flex items-center py-2 gap-4 group hover:bg-gray-300 rounded-xl px-3 w-full hover:cursor-pointer transition duration-500 ease-in-out">
            <div className="bg-[#EAEEF5] hover:bg-white px-2 py-1">
              <RiTodoFill size={17} />
            </div>
            {toggleSidebar ? null : <p>Todo List</p>}
          </div>
        </Link>

        {/* Menu 3 */}
        <Link to={"/schedule"}>
          <div className="flex items-center py-2 gap-4 group hover:bg-gray-300 rounded-xl px-3 w-full hover:cursor-pointer transition duration-500 ease-in-out">
            <div className="bg-[#EAEEF5] hover:bg-white px-2 py-1">
              <AiFillSchedule size={17} />
            </div>
            {toggleSidebar ? null : <p>Schedule Manager</p>}
          </div>
        </Link>

        {/* Menu 4 */}
        <Link to={"/chat"}>
          <div className="flex items-center py-2 gap-4 group hover:bg-gray-300 rounded-xl px-3 w-full hover:cursor-pointer transition duration-500 ease-in-out">
            <div className="bg-[#EAEEF5] hover:bg-white px-2 py-1">
              <BsFillChatSquareTextFill size={16} />
            </div>
            {toggleSidebar ? null : <p>Chat</p>}
          </div>
        </Link>

        {/* Menu 5 */}
        <Link to={"/group"}>
          <div className="flex items-center py-2 gap-4 group hover:bg-gray-300 rounded-xl px-3 w-full hover:cursor-pointer transition duration-500 ease-in-out">
            <div className="bg-[#EAEEF5] hover:bg-white px-2 py-1">
              <MdGroup size={17} />
            </div>
            {toggleSidebar ? null : <p>Group</p>}
          </div>
        </Link>
      </div>
    </div>
  );
};
