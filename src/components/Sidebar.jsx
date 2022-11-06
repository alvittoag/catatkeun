import { AiFillHome, AiFillSchedule } from "react-icons/ai";
import { RiTodoFill } from "react-icons/ri";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { MdGroup } from "react-icons/md";
import { Link } from "react-router-dom";

export const Sidebar = ({ toggleSidebar }) => {
  return (
    <div className="container">
      <div className="flex w-full flex-wrap justify-center">
        {/* Menu 1 */}
        <Link to={"/"}>
          <div className="p-5 w-1/5">
            <div className="">
              <AiFillHome size={20} />
            </div>
            {toggleSidebar ? null : <p>Home</p>}
          </div>
        </Link>

        {/* Menu 2 */}
        <Link to={"/todolist"}>
          <div className="p-5 w-1/5">
            <div className="">
              <RiTodoFill size={20} />
            </div>
            {toggleSidebar ? null : <p>Todo List</p>}
          </div>
        </Link>

        {/* Menu 3 */}
        <Link to={"/schedule"}>
          <div className="p-5 w-1/5">
            <div className="">
              <AiFillSchedule size={20} />
            </div>
            {toggleSidebar ? null : <p>Schedule Manager</p>}
          </div>
        </Link>

        {/* Menu 4 */}
        <Link to={"/chat"}>
          <div className="p-5 w-1/5">
            <div className="">
              <BsFillChatSquareTextFill size={16} />
            </div>
            {toggleSidebar ? null : <p>Chat</p>}
          </div>
        </Link>

        {/* Menu 5 */}
        <Link to={"/group"}>
          <div className="p-5 w-1/5">
            <div className="">
              <MdGroup size={20} />
            </div>
            {toggleSidebar ? null : <p>Group</p>}
          </div>
        </Link>
      </div>
    </div>
  );
};
