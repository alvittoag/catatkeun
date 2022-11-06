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
      <div className="bg-blue-500 fixed bottom-0 w-full">
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>

      {/* Navbar and Pages */}
      <div className="bg-red-500 invisible">
        <Navbar handleToggleSidebar={handleToggleSidebar} />
        <div className="bg-gray-100 h-screen">
          <Root />
        </div>
      </div>
    </div>
  );
}

export default App;
