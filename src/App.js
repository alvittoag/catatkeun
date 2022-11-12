import BottomNav from "./MobileComponents/BottomNav";
import NavbarMobile from "./MobileComponents/NavbarMobile";
import { RootPages } from "./pages/rootPages/RootPages";

function App() {
  return (
    <>
      {/* Tablet and Desktop !Comming Soon */}
      <div className="hidden md:block">
        <h1>Tablet And Desktop Comming Soon</h1>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden">
        <div className="flex flex-col">
          {/* Navbar */}
          <div className="fixed -mt-[10px] w-full">
            <NavbarMobile />
          </div>

          {/* Content */}
          <div>
            <RootPages />
          </div>

          {/* Bottom Navbar */}
          <div className="fixed -mb-2 bottom-0 w-full">
            <BottomNav />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
