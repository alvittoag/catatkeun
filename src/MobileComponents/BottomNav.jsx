import {
  AiOutlineHome,
  AiOutlineCalendar,
  AiOutlineProject,
  AiFillHome,
} from "react-icons/ai";
import { FaRegStickyNote, FaStickyNote } from "react-icons/fa";
import { RiTodoFill, RiTodoLine } from "react-icons/ri";
import { MdPeopleOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { useState } from "react";

const BottomNav = () => {
  const [nav, setNav] = useState(1);
  const HandleNavigation = (pages) => {
    setNav(pages);
  };

  return (
    <>
      {/* Button */}
      <div className="w-full flex justify-center items-center -mb-7">
        <button className="w-[70px] h-[70px] rounded-full bg-[#EBEAEB] text-4xl text-blue-600">
          +
        </button>
      </div>

      {/* SVG NAV */}
      <svg
        className="w-full"
        height="72"
        viewBox="0 0 390 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d_65_1143)">
          <path
            d="M0 8H136.318C147.516 8 158.13 12.9982 165.263 21.6306V21.6306C180.043 39.5184 207.349 39.851 222.561 22.3284L223.435 21.3217C230.781 12.8599 241.436 8 252.641 8H390V61H0V8Z"
            fill="#EAEAEA"
          />
        </g>
        <defs>
          <filter
            id="filter0_d_65_1143"
            x="-4"
            y="0"
            width="398"
            height="61"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="-4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_65_1143"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_65_1143"
              result="shape"
            />
          </filter>
        </defs>
      </svg>

      <div className="absolute top-0 px-4 items-center justify-between">
        <div className="flex mt-[68px] gap-24 another:gap-28">
          {/* Sesi 1 */}
          <div className="flex items-center gap-5">
            {/* Home */}
            <Link to={"/"}>
              <div onClick={() => HandleNavigation(1)}>
                {nav === 1 ? (
                  <AiFillHome size={26} className="-mt-2 " />
                ) : (
                  <AiOutlineHome size={26} />
                )}
              </div>
            </Link>

            {/* Notes */}
            <Link to={"notes"}>
              <div onClick={() => HandleNavigation(2)}>
                {nav === 2 ? (
                  <FaStickyNote className="-mt-2" size={22} />
                ) : (
                  <FaRegStickyNote size={22} />
                )}
              </div>
            </Link>

            {/* Todo List */}
            <Link to={"todolist"}>
              <div onClick={() => HandleNavigation(3)}>
                {nav === 3 ? (
                  <RiTodoFill className="-mt-2" size={23} />
                ) : (
                  <RiTodoLine size={23} />
                )}
              </div>
            </Link>
          </div>

          {/* Sesi 2 */}
          <div>
            <div className="flex items-center ml-1 gap-5">
              <Link to={"project-manager"}>
                <AiOutlineProject size={25} />
              </Link>
              <Link to={"calendar"}>
                <AiOutlineCalendar size={25} />
              </Link>
              <Link to={"user"}>
                <MdPeopleOutline size={26} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNav;
