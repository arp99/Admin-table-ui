import {
  MdFirstPage,
  MdLastPage,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { getCurrentPage } from "../../Utils/getCurrentPage";

export const Pagination = ({ filteredData, currentPage, setCurrentPage }) => {

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
      className="w-max h-9 rounded-2xl px-4 flex justify-center items-center gap-4 bg-lightGray dark:bg-blueGray"
      onClick={(evt) => pageChangeHandler(evt)}
    >
      <button
        className="rounded-full hover:shadow-xl"
        data-page="firstpage"
      >
        <MdFirstPage size={16} height="100%" style={{ margin: "0 auto" }} />
      </button>
      <button
        className={`rounded-full hover:shadow-xl ${
          currentPage === 1 && "cursor-not-allowed"
        }`}
        data-page="back"
        onClick={(evt) => {
          if (currentPage === 1) {
            evt.stopPropagation();
          }
        }}
      >
        <MdKeyboardArrowLeft size={16} style={{ margin: "0 auto" }} />
      </button>
      {"0"
        .repeat(numberOfPages)
        .split("")
        .map((item, index) => (
          <button
            className={`rounded-full hover:shadow-xl text-base ${
              currentPage === index + 1 ? "text-lightblue font-semibold" : ""
            }`}
            key={Math.random() + index}
            data-page={index + 1}
          >
            {index + 1}
          </button>
        ))}
      <button
        className={`rounded-full hover:shadow-xl ${
          currentPage === numberOfPages && "cursor-not-allowed"
        }`}
        data-page="next"
        onClick={(evt) => {
          if (currentPage === numberOfPages) {
            evt.stopPropagation();
          }
        }}
      >
        <MdKeyboardArrowRight size={16} style={{ margin: "0 auto" }} />
      </button>
      <button
        className="rounded-full hover:shadow-xl"
        data-page="lastpage"
      >
        <MdLastPage size={16} style={{ margin: "0 auto" }} />
      </button>
    </div>
  );
};
