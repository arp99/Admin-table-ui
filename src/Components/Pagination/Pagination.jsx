import { useFilterData } from "../../Context/filterContext";
import {
  MdFirstPage,
  MdLastPage,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { getCurrentPage } from "../../Utils/getCurrentPage";

export const Pagination = () => {
  const { filteredData, currentPage, setCurrentPage } = useFilterData();

  const numberOfPages = Math.ceil(filteredData.length / 10);

  const pageChangeHandler = (evt) => {
    evt.stopPropagation();
    const target = evt.target;
    let pageValue = 1;
    if (target.tagName === "svg") {
      pageValue = target.parentNode.dataset.page;
      setCurrentPage(getCurrentPage(pageValue, numberOfPages, currentPage));
    } else if (target.tagName === "path") {
      pageValue = target.parentNode.parentNode.dataset.page;
      setCurrentPage(getCurrentPage(pageValue, numberOfPages, currentPage));
    } else if (target.tagName === "BUTTON") {
      pageValue = target.dataset.page;
      setCurrentPage(getCurrentPage(pageValue, numberOfPages, currentPage));
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
        className={`border border-gray-400 rounded-full w-10 h-10 hover:shadow-xl ${
          currentPage === 1 && "cursor-not-allowed"
        }`}
        data-page="back"
        onClick={(evt) => {
          if (currentPage === 1) {
            evt.stopPropagation();
          }
        }}
      >
        <MdKeyboardArrowLeft size={20} style={{ margin: "0 auto" }} />
      </button>
      {"0"
        .repeat(numberOfPages)
        .split("")
        .map((item, index) => (
          <button
            className={`border border-gray-400 rounded-full w-10 h-10 hover:shadow-xl ${
              currentPage === index + 1 ? "bg-gray-400 text-white" : ""
            }`}
            key={Math.random() + index}
            data-page={index + 1}
          >
            {index + 1}
          </button>
        ))}
      <button
        className={`border border-gray-400 rounded-full w-10 h-10 hover:shadow-xl ${
          currentPage === numberOfPages && "cursor-not-allowed"
        }`}
        data-page="next"
        onClick={(evt) => {
          if (currentPage === numberOfPages) {
            evt.stopPropagation();
          }
        }}
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
