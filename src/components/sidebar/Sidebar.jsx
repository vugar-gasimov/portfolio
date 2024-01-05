import { useState } from "react";
import Links from "./links/Links";
import ToggleBtn from "./toggleBtn/ToggleBtn";

const Sidebar = () => {
    const [open, setOpen] = useState(flse)
  const vatiants = {
      open:
      close:
  };
  return (
    <div className="flex flex-col items-center justify-center bg-white text-black">
      <div className="fixed top-0 left-0 bottom-0 w-400 bg-white z-50">
        <Links />
      </div>
          <ToggleBtn setOpen={setOpen} />
    </div>
  );
};
export default Sidebar;
