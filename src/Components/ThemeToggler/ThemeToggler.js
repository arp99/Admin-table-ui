import { useTheme } from "../../Context/themeContext";
import { BsSun } from "react-icons/bs";
import { BiMoon } from "react-icons/bi";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
      <button
        className="bg-lightGray dark:bg-blueGray dark:text-lightGray text-lightText w-10 h-9 flex justify-center items-center rounded-xl transition-shadow focus:shadow-hover"
        onClick={() => setTheme({ type: "TOGGLE_THEME" })}
      >
        {theme === "dark" ? <BsSun size={15} /> : <BiMoon size={15} />}
      </button>
    </>
  );
};
