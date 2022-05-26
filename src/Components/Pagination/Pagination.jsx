import { useUser } from "../../Context/userDataContext";
import {
  MdFirstPage,
  MdLastPage,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";

export const Pagination = () => {
  const { userData } = useUser();
  const { filteredData } = userData;

  const numberOfPages = Math.ceil(filteredData.length / 10);

  const pageChangeHandler = (evt) => {
    evt.stopPropagation();
    const target = evt.target;
    if (target.tagName === "svg") {
      console.log(target.parentNode.dataset.page);
    } else if (target.tagName === "path") {
      console.log(target.parentNode.parentNode.dataset.page);
    } else {
      console.log(target.dataset.page);
    }
  };

  return (
    <div
      className="w-full h-1/5 flex justify-center items-center gap-2"
      onClick={(evt) => pageChangeHandler(evt)}
    >
      <button
        className="border border-gray-400 rounded-full w-10 h-10 hover:shadow-xl"
        data-page="firstpage"
      >
        <MdFirstPage size={20} height="100%" style={{ margin: "0 auto" }} />
      </button>
      <button
        className="border border-gray-400 rounded-full w-10 h-10 hover:shadow-xl"
        data-page="back"
      >
        <MdKeyboardArrowLeft size={20} style={{ margin: "0 auto" }} />
      </button>
      {"0"
        .repeat(numberOfPages)
        .split("")
        .map((item, index) => (
          <button
            className="border border-gray-400 rounded-full w-10 h-10 hover:shadow-xl"
            key={Math.random() + index}
            data-page={index + 1}
          >
            {index + 1}
          </button>
        ))}
      <button
        className="border border-gray-400 rounded-full w-10 h-10 hover:shadow-xl"
        data-page="next"
      >
        <MdKeyboardArrowRight size={20} style={{ margin: "0 auto" }} />
      </button>
      <button
        className="border border-gray-400 rounded-full w-10 h-10 hover:shadow-xl"
        data-page="lastpage"
      >
        <MdLastPage size={20} style={{ margin: "0 auto" }} />
      </button>
    </div>
  );
};
