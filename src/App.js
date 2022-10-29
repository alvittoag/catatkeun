import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Root } from "./pages/rootPages/Root";

function App() {
  const [toggleSidebar, setToggleSidebar] = useState(true);
  const handleToggleSidebar = () => {
    setToggleSidebar(!toggleSidebar);
  };
  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={
          toggleSidebar
            ? "fixed w-[18%] md:w-[8%] lg:w-[5%] bg-[#FEFEFF] h-full shadow-xl"
            : "fixed w-[45%] md:w-[28%] lg:w-[18%] bg-[#FEFEFF] h-full  shadow-xl "
        }
      >
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>

      {/* Navbar and Pages */}
      <div
        className={
          toggleSidebar
            ? "absolute right-0 w-[82%] md:w-[92%] lg:w-[95%] flex-col "
            : "absolute right-0 w-[55%] md:w-[72%] lg:w-[82%] flex-col "
        }
      >
        <Navbar handleToggleSidebar={handleToggleSidebar} />
        <div className="bg-gray-100 h-screen">
          <Root />
        </div>
      </div>
    </div>
  );
}

export default App;
