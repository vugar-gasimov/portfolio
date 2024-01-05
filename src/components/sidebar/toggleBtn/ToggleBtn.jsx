const ToggleBtn = ({ setOpen }) => {
  return (
    <button
      onClick={() => setOpen((prev) => !prev)}
      className="z-50 fixed w-12 h-12 rounded-full top-4 left-4 bg-transparent border-none cursor-pointer"
    >
      ToggleBtn
    </button>
  );
};
export default ToggleBtn;
